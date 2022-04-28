const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getUsers,
  getUserById,
  getUserInfo,
  updateUserData,
  updateUserAvatar,
} = require('../controllers/users');
const {
  validateGetUsers,
  validateGetUserById,
  validateGetUserInfo,
  validateUpdateUser,
  validateUpdateAvatar,
} = require('../middlewares/validations');

router.use(auth);
router.get('/', validateGetUsers, getUsers);
router.get('/:userId', validateGetUserById, getUserById);
router.post('/me', validateGetUserInfo, getUserInfo);
router.patch('/me', validateUpdateUser, updateUserData);
router.patch('/me/avatar', validateUpdateAvatar, updateUserAvatar);

module.exports = router;
