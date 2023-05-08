const express = require('express');
const { loginController, registrationController } = require('../controllers/authController');
const router = express.Router();

router.route( "/login").post(loginController);

router.route( "/register").post(registrationController);

module.exports = router;