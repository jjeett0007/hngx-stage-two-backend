

const express = require('express');
const router = express.Router();
const { createUser } = require('../controller/createController');

// Route to create a new user
router.post('/users', createUser);

router.get('/users', getAllUsers);

module.exports = router;
