/**
 * Definition public homepage routes and connect to each controllers
 *
 * Base with '/'
 *
 */
'use strict';

const router          = require('express').Router();
const indexController = require('../controllers/index_controller');

router.get('/', indexController);

module.exports = { path: '/', router };