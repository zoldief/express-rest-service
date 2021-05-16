const { v4: uuid } = require('uuid');
const DB = require("../../common/inMemoryDB");
const Board = require("./board.model");

const getAll = async () => DB.boards;
const createBoard = async (params) => {
  const newBoard = new Board({ id: uuid(), ...params });
  DB.boards.push(newBoard);
  return newBoard;
}
const getBoard = async (id) => DB.boards.find((item) => item.id === id)
const updateBoard = async (id, params) => {
  const board = DB.boards.find((item) => item.id === id);
  DB.boards[DB.boards.indexOf(board)] = new Board({ id, ...params })
  return board;
}
const deleteBoard = async (id) => {
  const board = DB.boards.find((item) => item.id === id);
  DB.boards.splice(DB.boards.indexOf(board), 1);
  return board
}
module.exports = { getAll, createBoard, getBoard, updateBoard, deleteBoard }