const express = require('express');
const path = require('path');
const cors = require('cors'); 
const app = express();
const router = require('./app/routes/index.routes');

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,POST', 
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../tests/upload')));

app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
