const express = require("express");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./lib/db");
const cors = require("cors");
const { createUser } = require("./controller/createController");
const { getAllUsers } = require("./controller/getController");
const { updateUserName } = require("./controller/updateController");
const { deleteUser } = require("./controller/deleteUser");
const { getUserbyId } = require("./controller/getById");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectToDatabase();

app.post("/api", createUser);

app.get("/api/:id", getUserbyId);

app.put("/api/:id", updateUserName);

app.delete("/api/:id", deleteUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
