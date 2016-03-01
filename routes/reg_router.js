
'use strict';

const router = require('express').Router();
const regController   = require('../controllers/reg_controller');

router.get('/', regController.reg);
router.post('/user/reg',regController.regDB);
module.exports = { path: '/regs', router };