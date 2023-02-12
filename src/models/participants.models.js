const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Users = require("./users.models");
const Conversations = require("./conversations.models");

const Participants = db.define("participants", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
  conversation_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Conversations,
      key: "id",
    },
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Participants;
