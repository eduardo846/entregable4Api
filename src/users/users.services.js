const userControllers = require("./users.controllers");
const getAllUsers = (req, res) => {
  userControllers
    .findAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  userControllers.findUserById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Users not found" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const postNewUser = (req, res) => {
  const userObj = req.body;
  userControllers
    .createNewUser(userObj)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  postNewUser,
};
