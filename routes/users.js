const router = require('express').Router();
const {
  getUsers,
  getUserById,
  postUsers,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', postUsers);

module.exports = router;
