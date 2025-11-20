// src/controllers/menuController.js
const db = require('../db');

function pickLang(jsonField, lang) {
  try {
    if (!jsonField) return null;
    const parsed = typeof jsonField === 'object' ? jsonField : JSON.parse(jsonField);
    return parsed[lang] ?? parsed['ru'] ?? Object.values(parsed)[0];
  } catch (e) {
    return jsonField;
  }
}

exports.getMenu = async (req, res) => {
  const lang = (req.query.lang || 'ru').slice(0,2);
  try {
    const [cats] = await db.query('SELECT id, name, image_url, thumb_url, sort_order FROM categories ORDER BY sort_order, id');
    const categories = cats.map(c => ({
      id: c.id,
      name: pickLang(c.name, lang),
      image_url: c.image_url,
      thumb_url: c.thumb_url
    }));
    res.json({ languages: ['ru','en'], categories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db_error' });
  }
};

exports.getItemsByCategory = async (req, res) => {
  const lang = (req.query.lang || 'ru').slice(0,2);
  const categoryId = parseInt(req.params.id);
  try {
    const [items] = await db.query('SELECT id, name, description, price, image_url, is_available FROM items WHERE category_id = ? ORDER BY sort_order, id', [categoryId]);
    const result = items.map(i => ({
      id: i.id,
      name: pickLang(i.name, lang),
      description: pickLang(i.description, lang),
      price: Number(i.price),
      image_url: i.image_url,
      is_available: !!i.is_available
    }));
    res.json({ items: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db_error' });
  }
};

exports.getItem = async (req, res) => {
  const lang = (req.query.lang || 'ru').slice(0,2);
  const id = parseInt(req.params.id);
  try {
    const [rows] = await db.query('SELECT id, name, description, price, image_url, is_available FROM items WHERE id = ?', [id]);
    if (!rows.length) return res.status(404).json({ error: 'not_found' });
    const i = rows[0];
    res.json({
      id: i.id,
      name: pickLang(i.name, lang),
      description: pickLang(i.description, lang),
      price: Number(i.price),
      image_url: i.image_url,
      is_available: !!i.is_available
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db_error' });
  }
};

exports.recordEvent = async (req, res) => {
  try {
    const { ref, action, category_id, item_id } = req.body;
    const ua = req.headers['user-agent'] || null;
    const ip = req.ip;
    await db.query('INSERT INTO menu_events (ref, action, category_id, item_id, user_agent, ip) VALUES (?, ?, ?, ?, ?, ?)',
      [ref || null, action, category_id || null, item_id || null, ua, ip]);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false });
  }
};
