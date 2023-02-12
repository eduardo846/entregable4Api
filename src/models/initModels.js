const Users = require("./users.models");
const Participants = require("./participants.models");
const Messages = require("./messages.models");
const Conversations = require("./conversations.models");

const initModels = () => {
  Participants.hasMany(Users);
  Messages.hasMany(Participants);
  Participants.hasMany(Conversations);
};
module.exports = initModels;
