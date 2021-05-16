const boardRepo = require('./board.memory.repository');
const taskService = require("../tasks/task.service");

const getAll = () => boardRepo.getAll();
const createBoard = (params) => boardRepo.createBoard(params);
const getBoard = (id) => boardRepo.getBoard(id);
const updateBoard = (id, params) => boardRepo.updateBoard(id, params);
const deleteBoard = (id) => {
    boardRepo.deleteBoard(id);
    taskService.deleteBoardFrom(id);
  };

module.exports = { getAll, createBoard, getBoard, updateBoard, deleteBoard };
