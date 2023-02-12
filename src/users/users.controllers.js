
const Users = require("../models/users.models");
const { v4: uuidv4 } = require('uuid');

const findAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createNewUser = async (userObj) => {
  const newUser = {
    id:uuidv4(),
    first_name: userObj.first_name,
    last_name: userObj.last_name,
    email: userObj.email,
    password: userObj.password,
    profile_image: userObj.profile_image,
    is_active: true,
    phone: userObj.phone,
  };
  const data = await Users.create(newUser);
  return data;
};

module.exports = {
  findAllUsers,
  findUserById,
  createNewUser,
};
