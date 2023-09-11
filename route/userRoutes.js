const express = require('express');
const router = express.Router();
const { createUser } = require("../controller/createController");
const { getAllUsers } = require("../controller/getController");
const { updateUserName } = require("../controller/updateController");
const { deleteUser } = require("../controller/deleteUser");


// Route to create a new user
router.post("/users", createUser);

router.get("/users", getAllUsers);

router.put("/users/:id", updateUserName);

router.delete("/users/:id", deleteUser);

module.exports = router;
