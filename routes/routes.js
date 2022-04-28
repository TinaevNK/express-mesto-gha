const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');
const { createUser, login } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-error');

router.post('/signup', createUser);
router.post('/signin', login);

router.use('/users', userRouter);
router.use('/cards', cardRouter);
// Обработаем некорректный маршрут и вернём ошибку 404
router.use('*', (req, res, next) => {
  next(new NotFoundError('Ресурс по указанному адресу не найден'));
});

module.exports = router;
