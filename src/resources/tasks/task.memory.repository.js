const { v4: uuid } = require('uuid');
const DB = require("../../common/inMemoryDB");
const Task = require('./task.model');

const getAll = async (boardId) => DB.tasks.filter(item => item.boardId === boardId)
const createTask = async (boardId, params) => {
    const newTask = new Task({ ...params, boardId, id: uuid() });
    DB.tasks.push(newTask);
    return newTask;
}
const getTask = async (boardId, taskId) => DB.tasks.find(item => item.id === taskId);
const updateTask = async (boardId, taskId, params) => {
    const task = DB.tasks.findIndex(item => item.id === taskId);
    if (task !== -1) {
      const newTask = { ...params, id: taskId };
      DB.tasks[task] = newTask;
      return newTask;
    }
    return false;
 };
 const deleteTask = async (boardId, taskId) => {
    const task = DB.tasks.findIndex(item => item.id === taskId);
    if (task !== -1) {
     DB.tasks.splice(task, 1);
    }
    return task;
 };
 const deleteUserFrom = async (userId) => {
    DB.tasks.forEach((item, index) => {
       if (item.userId === userId) {
          DB.tasks[index].userId = null;
       }
    });
 };
 const deleteBoardFrom = async (boardId) => {
    DB.tasks = DB.tasks.filter(item => item.boardId !== boardId);
 };
module.exports = { getAll, createTask, getTask, updateTask, deleteTask, deleteUserFrom, deleteBoardFrom };