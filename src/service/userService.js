const User = require("../model/User");
const bcrypt = require('bcrypt');

const getUsers = async () => {
  return await User.find().select("-password");
};

const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  userData.password = hashedPassword;
  return await User.create(userData);
};

const updateUser = async (id, userData) => {
  if (userData.password) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
  }
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
