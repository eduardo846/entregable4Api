const participantServices = require("./participants.services");
const router = require("express").Router();
router.get("/participant", participantServices.getAllParticipants);
router.post("/participant", participantServices.postNewParticipant);
router.get("/participant/:id", participantServices.getParticipanBytId);
module.exports = router;
