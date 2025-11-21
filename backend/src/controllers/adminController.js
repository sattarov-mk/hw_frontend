// src/controllers/adminController.js
const db = require('../db');
const path = require('path');

function safeJson(obj) {
  return JSON.stringify(obj || {});
}

exports.listCategories = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, name, image_url, thumb_url, sort_order FROM categories ORDER BY sort_order, id');
    res.json(rows);
  } catch (e) { console.error(e); res.status(500).json({ error:'db' }); }
};

exports.createCategory = async (req, res) => {
  try {
    const { name_ru, name_en, sort_order } = req.body;
    let image_url = null, thumb_url = null;
    if (req.file) {
      image_url = `${process.env.BASE_URL || ''}/uploads/${req.file.filename}`;
      // thumb_url could be generated/resized by a separate service; here link to same file
      thumb_url = image_url;
    }
    const name = safeJson({ ru: name_ru || name_en || 'Категория', en: name_en || name_ru || 'Category' });
    const [resq] = await db.query('INSERT INTO categories (name, image_url, thumb_url, sort_order) VALUES (?, ?, ?, ?)', [name, image_url, thumb_url, sort_order || 0]);
    res.json({ id: resq.insertId });
  } catch (e) { console.error(e); res.status(500).json({ error:'db' }); }
};

exports.updateCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name_ru, name_en, sort_order } = req.body;
    let image_url = null;
    if (req.file) image_url = `${process.env.BASE_URL || ''}/uploads/${req.file.filename}`;
    const [cur] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
    if (!cur.length) return res.status(404).json({ error: 'not_found' });
    const current = cur[0];
    const nameObj = Object.assign({}, JSON.parse(current.name || '{}'));
    if (name_ru) nameObj.ru = name_ru;
    if (name_en) nameObj.en = name_en;
    const name = JSON.stringify(nameObj);
    const newImage = image_url || current.image_url;
    await db.query('UPDATE categories SET name=?, image_url=?, sort_order=? WHERE id=?', [name, newImage, sort_order || current.sort_order, id]);
    res.json({ ok: true });
  } catch (e) { console.error(e); res.status(500).json({ error:'db' }); }
};

exports.deleteCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await db.query('DELETE FROM categories WHERE id = ?', [id]);
    res.json({ ok: true });
  } catch (e) { console.error(e); res.status(500).json({ error:'db' }); }
};

exports.listItemsByCategory = async (req, res) => {
  try {
    const cat = parseInt(req.params.id);
    const [rows] = await db.query('SELECT * FROM items WHERE category_id = ? ORDER BY sort_order, id', [cat]);
    res.json(rows);
  } catch (e) { console.error(e); res.status(500).json({ error:'db' }); }
};

exports.createItem = async (req, res) => {
  try {
    const { category_id, name_ru, name_en, description_ru, description_en, price, is_available, sort_order } = req.body;
    let image_url = null;
    if (req.file) image_url = `${process.env.BASE_URL || ''}/uploads/${req.file.filename}`;
    const name = JSON.stringify({ ru: name_ru || name_en, en: name_en || name_ru });
    const description = JSON.stringify({ ru: description_ru || '', en: description_en || '' });
    const [r] = await db.query('INSERT INTO items (category_id, name, description, price, image_url, is_available, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [category_id, name, description, price || 0.00, image_url, is_available ? 1 : 0, sort_order || 0]);
    res.json({ id: r.insertId });
  } catch (e) { console.error(e); res.status(500).json({ error:'db' }); }
};

exports.updateItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { category_id, name_ru, name_en, description_ru, description_en, price, is_available, sort_order } = req.body;
    const [cur] = await db.query('SELECT * FROM items WHERE id = ?', [id]);
    if (!cur.length) return res.status(404).json({ error: 'not_found' });
    const current = cur[0];
    const nameObj = Object.assign({}, JSON.parse(current.name || '{}'));
    if (name_ru) nameObj.ru = name_ru;
    if (name_en) nameObj.en = name_en;
    const descObj = Object.assign({}, JSON.parse(current.description || '{}'));
    if (description_ru) descObj.ru = description_ru;
    if (description_en) descObj.en = description_en;
    let image_url = current.image_url;
    if (req.file) image_url = `${process.env.BASE_URL || ''}/uploads/${req.file.filename}`;
    await db.query('UPDATE items SET category_id=?, name=?, description=?, price=?, image_url=?, is_available=?, sort_order=? WHERE id=?',
      [category_id || current.category_id, JSON.stringify(nameObj), JSON.stringify(descObj), price || current.price, image_url, (is_available !== undefined ? (is_available ? 1 : 0) : current.is_available), sort_order || current.sort_order, id]);
    res.json({ ok: true });
  } catch (e) { console.error(e); res.status(500).json({ error:'db' }); }
};

exports.deleteItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await db.query('DELETE FROM items WHERE id = ?', [id]);
    res.json({ ok: true });
  } catch (e) { console.error(e); res.status(500).json({ error:'db' }); }
};

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'no_file' });
    const url = `${process.env.BASE_URL || ''}/uploads/${req.file.filename}`;
    res.json({ url });
  } catch (e) { console.error(e); res.status(500).json({ error:'server' }); }
};
