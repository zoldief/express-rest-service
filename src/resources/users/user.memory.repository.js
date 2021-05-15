const { v4: uuid } = require('uuid');
const DB = require("../../common/inMemoryDB");
const User = require("./user.model");

const getAll = async () => DB.users;
const createUser = async (params) => {
  const newUser = new User({ id: uuid(), ...params });
  DB.users.push(newUser);
  return newUser;
}
const getUser = async (id) => DB.users.find((item) => item.id === id)
const updateUser = async (id, params) => {
  const user = DB.users.find((item) => item.id === id);
  DB.users[DB.users.indexOf(user)] = new User({ id, ...params })
  return user
}
const deleteUser = async (id) => {
  const user = DB.users.find((item) => item.id === id)
  DB.users.splice(DB.users.indexOf(user), 1);
  return user
}
module.exports = { getAll, createUser, getUser,  updateUser, deleteUser }