
'use strict';

const router = require('express').Router();
const regController   = require('../controllers/reg_controller');

router.get('/', regController.reg);

module.exports = { path: '/regs', router };