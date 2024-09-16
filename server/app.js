const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const db = require('./app/config/db');
const cors = require('cors'); 
const app = express();
const router = require('./app/routes/index.routes');
const cookieParser = require('cookie-parser');

const corsOptions = {
  origin: process.env.WEBURL, 
  methods: 'GET,POST', 
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../tests/upload')));

app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
