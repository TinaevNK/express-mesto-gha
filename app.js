const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const cenralErrors = require('./middlewares/central-err');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json()); // для собирания JSON-формата

// временное решение регистрации, позже уберём
app.use((req, res, next) => {
  req.user = {
    _id: '625b021e6f75c882a4ed613f',
  };

  next();
});

app.use(router);

app.use(cenralErrors); // мидлвара централизованного обработчика ошибок

mongoose.connect('mongodb://localhost:27017/mestodb');

app.listen(PORT);
