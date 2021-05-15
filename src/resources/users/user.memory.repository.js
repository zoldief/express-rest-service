const { v4: uuid } = require('uuid');
const DB = require("../../common/inMemoryDB");
const User = require("./user.model");

const getAll = async () => DB.users;
const createUser = async (params) => {
  const newUser = new User({ id: uuid(), ...params });
  DB.users.push(newUser);
  return newUser;
}
module.exports = { getAll, createUser };
