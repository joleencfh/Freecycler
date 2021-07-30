const express = require('express');
const cors = require('cors');
const router = require('./router');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT);

module.exports = app;
