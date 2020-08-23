const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

console.log(JSON.stringify(controller));
// Routes
router.post('/login', controller.login);
router.post('/register', controller.register);


module.exports = router;