const router = require('express').Router();
const {
  getUsers,
  getUserById,
  getUserInfo,
  updateUserData,
  updateUserAvatar,
} = require('../controllers/users');
const {
  validateGetUserById,
  validateUpdateUser,
  validateUpdateAvatar,
} = require('../middlewares/validations');
const auth = require('../middlewares/auth');

router.use(auth);
router.get('/', getUsers);
router.get('/me', getUserInfo);
router.get('/:userId', validateGetUserById, getUserById);
router.patch('/me', validateUpdateUser, updateUserData);
router.patch('/me/avatar', validateUpdateAvatar, updateUserAvatar);

module.exports = router;
