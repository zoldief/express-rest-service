const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const createUser = (params) => usersRepo.createUser(params);

module.exports = { getAll, createUser};
