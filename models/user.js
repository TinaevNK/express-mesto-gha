const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, // имя — это строка
    required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
    minlength: [2, 'Минимальная длина - 2 символа'],
    maxlength: [30, 'Максимальная длина - 30 символов'],
  },
  about: {
    type: String, // тип — String
    required: true,
    minlength: [2, 'Минимальная длина - 2 символа'], // минимальная длина имени — 2 символа
    maxlength: [30, 'Максимальная длина - 30 символов'], // а максимальная — 30 символов
  },
  avatar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
