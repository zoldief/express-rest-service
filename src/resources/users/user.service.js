const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const createUser = (params) => usersRepo.createUser(params);
const getUser = (id) => usersRepo.getUser(id);

module.exports = { getAll, createUser, getUser};
