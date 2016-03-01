/**
 * Definition public homepage routes and connect to each controllers
 *
 * Base with '/APICP'
 *
 */
'use strict';

const router = require('express').Router();
const APIC   = require('../controllers/APIC_controller');

// Root cannot be viewed /APIC/ is empty.
router.get('/', APIC.root);

// login api url  /APIC/login
router.post('/login',APIC.login);

module.exports = { path: '/APIC', router };