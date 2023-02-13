const conversationServices = require("./conversations.services");
const router = require("express").Router();
router.get("/conversations", conversationServices.getAllConversations);
router.get("/conversations/:id", conversationServices.getConversationById);
router.post("/conversations/", conversationServices.postNewUser);
module.exports = router;
