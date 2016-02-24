/**
 *
 */

'use strict';

const env = require('../helpers/helper_loader')('env');

module.exports = {

    version: env('version') || 'Unknown'

};