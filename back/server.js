'use strict';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

const { PORT, a } = process.env;

// commentario no correcto
app.get('/', (req, res) => {
    res.status(200).send('¡Hola!');
});

app.get('/login', (req, res) => {
    res.status(200).send('¡Loginnrrrrrrr!');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
