const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 5000;

// Body Parse Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.use('/api', require('./routes/api/translate_v2'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Translator App Server started on http://${hostname}:${port}/`)
);
