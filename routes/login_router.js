'use strict';


const router          = require('express').Router();
const loginController = require('../controllers/login_controller');

router.get('/', loginController.login );

module .exports = {path:'/login', router};