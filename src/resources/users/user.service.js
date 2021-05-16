const usersRepo = require('./user.memory.repository');
const taskService = require("../tasks/task.service");

const getAll = () => usersRepo.getAll();
const createUser = (params) => usersRepo.createUser(params);
const getUser = (id) => usersRepo.getUser(id);
const updateUser = (id, params) => usersRepo.updateUser(id, params);
const deleteUser = (id) => {
    usersRepo.deleteUser(id);
    taskService.deleteUserFrom(id);
  };

module.exports = { getAll, createUser, getUser, updateUser, deleteUser};
