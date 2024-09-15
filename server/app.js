const express = require('express');
const path = require('path');
const app = express();
const router = require('./app/routes/index.routes');

/* upload file test */
app.use(express.static(path.join(__dirname, '../tests/upload')));

app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
