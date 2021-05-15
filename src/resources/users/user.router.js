const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res
  .status(users ? 200 : 404)
  .json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.createUser(req.body);
  res
  .status(newUser ? 201 : 404)
  .json(User.toResponse(newUser));
})

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  res
    .status(user ? 200: 404)
    .json(user? User.toResponse(user) : {});
})

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);
  res
    .status(user ? 200: 404)
    .json(user? User.toResponse(user) : {});
})

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  res
    .status(user ? 200: 404)
    .json(user? User.toResponse(user) : {});
})

module.exports = router;
