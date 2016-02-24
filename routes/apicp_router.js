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

module.exports = { path: '/APIC', router };