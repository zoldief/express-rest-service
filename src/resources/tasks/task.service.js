const taskRepo = require('./task.memory.repository');


const getAll = (boardId) => taskRepo.getAll(boardId);
const createTask = (boardId, params) => taskRepo.createTask(boardId, params);
const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);
const updateTask = (boardId, taskId, params) => taskRepo.updateTask(boardId, taskId, params);
const deleteTask = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId);
const deleteUserFrom = (userId) => taskRepo.deleteUserFrom(userId);
const deleteBoardFrom = (userId) => taskRepo.deleteBoardFrom(userId);

module.exports = { getAll, createTask, getTask, updateTask, deleteTask, deleteUserFrom, deleteBoardFrom };
