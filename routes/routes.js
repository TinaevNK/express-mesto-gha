const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');
const { ERROR_CODE_NOT_FOUND } = require('../constants');

router.use('/users', userRouter);
router.use('/cards', cardRouter);
// Обработаем некорректный маршрут и вернём ошибку 404
router.use('*', (req, res) => {
  res.status(ERROR_CODE_NOT_FOUND).send({ message: `Страницы по адресу ${req.baseUrl} не существует` });
});

module.exports = router;
