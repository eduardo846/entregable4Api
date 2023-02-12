const Participants = require("../models/participants.models");
const participantControllers = require("./participants.controllers");

const getAllParticipants = (req, res) => {
  participantControllers
    .findAllPaticipans()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getParticipanBytId = (req, res) => {
  const id = req.params.id;
  participantControllers
    .findParticipantById(id)
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

const postNewParticipant = (req, res) => {
  const participanObj = req.body;
  participantControllers
    .createNewParticipant(participanObj)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getAllParticipants,
  postNewParticipant,
  getParticipanBytId,
};
