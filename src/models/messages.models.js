const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Participants = require("./participants.models");

const Messages = db.define("messages", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  participant_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Participants,
      key: "id",
    },
  },
});
module.exports = Messages;