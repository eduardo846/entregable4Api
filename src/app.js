const express = require("express");
const db = require("./utils/database");
const initModels = require('./models/initModels');
const userRouter  = require("./users/users.router");
const participantRouter = require("./participants/participants.router")
const conversationRouter = require("./conversations/conversations.router")

const app = express();

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Las credenciales de la base de datos son correctas");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("La base de datos del virus ha sido actualizada");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();
app.get('/',(req, res)=>{
  res.json({
    message: 'Server Ok!',
    routes: {
      users:'http://localhost:3000/api/v1'
    }
  })
})

app.use('/api/v1',userRouter),
app.use('/api/v1', participantRouter),
app.use('/api/v1',conversationRouter),

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
