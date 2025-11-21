// src/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const publicRoutes = require('./routes/public');
const adminRoutes = require('./routes/admin');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({ status: 'API is running', endpoints: ['/api/menu?lang=ru', '/api/admin'] });
});


// static uploads
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use('/api', publicRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
