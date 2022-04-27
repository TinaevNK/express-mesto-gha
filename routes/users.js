const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getUsers,
  getUserById,
  createUser,
  updateUserData,
  updateUserAvatar,
} = require('../controllers/users');

router.use(auth);
router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.patch('/me', updateUserData);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;
