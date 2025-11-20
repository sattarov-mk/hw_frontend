// src/routes/public.js
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/menu', menuController.getMenu); // GET /api/menu?lang=ru
router.get('/categories/:id/items', menuController.getItemsByCategory); // /api/categories/:id/items?lang=ru
router.get('/items/:id', menuController.getItem); // /api/items/:id?lang=ru

// analytics
router.post('/events', menuController.recordEvent);

module.exports = router;
