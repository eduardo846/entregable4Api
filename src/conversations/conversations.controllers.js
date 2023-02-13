const Conversations = require("../models/conversations.models");
const { u4: uuidv4 } = require("uuid");

const findAllConversations = async () => {
  const data = await Conversations.findAll();
  return data;
};

const findConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id: id,
    },
  });
};

const createNewConversations = async (conversationObj) => {
  const newConversation = {
    id: uuidv4(),
    profile_image: conversationObj.profile_image,
    name: conversationObj.name,
    created_by: conversationObj.created_by,
    is_group: false,
  };
  const data = await Conversations.create(newConversation);
  return data;
};

module.exports = {
  findAllConversations,
  findConversationById,
  createNewConversations,
};
