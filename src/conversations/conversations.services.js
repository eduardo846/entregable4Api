const conversationControllers = require("./conversations.controllers");
const getAllConversations = (req, res) => {
  conversationControllers
    .findAllConversations()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getConversationById = (req, res) => {
  const id = req.params.id;
  conversationControllers
    .findConversationById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Conversation not found" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const postNewUser = (req, res) => {
  const conversationObj = req.body;
  conversationControllers
    .createNewConversations(conversationObj)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getAllConversations,
  getConversationById,
  postNewUser,
};
