const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Conversations = db.define("conversations", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  profile_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_by: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  is_group: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
module.exports = Conversations;
