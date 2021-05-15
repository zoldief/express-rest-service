const DB = require("../../common/inMemoryDB");

const getAll = async () => DB.users;

module.exports = { getAll };
