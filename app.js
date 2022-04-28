require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const router = require('./routes/routes');
const errorHandler = require('./middlewares/error-handler');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json()); // для собирания JSON-формата

app.use(router);
app.use(errors()); // обработчик ошибок celebrate
app.use(errorHandler); // мидлвара централизованного обработчика ошибок

mongoose.connect('mongodb://localhost:27017/mestodb');

app.listen(PORT);
