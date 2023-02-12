const Participants = require("../models/participants.models");
const { v4: uuidv4 } = require("uuid");

const findAllPaticipans = async () => {
  const data = await Participants.findAll();
  return data;
};

const findParticipantById = async (id) => {
  const data = await Participants.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createNewParticipant = async (participanObj) => {
  const newParticipant = {
    id: uuidv4(),
    user_id: participanObj.user_id,
    conversation_id: participanObj.conversation_id,
    is_admin: true,
  };
  const data = await Participants.create(newParticipant);
  return data;
};

module.exports = {
  findAllPaticipans,
  createNewParticipant,
  findParticipantById,
};
