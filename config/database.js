/**
 * All about databases config
 */

'use strict';

const env = require('../helpers/helper_loader')('env');

module.exports = {

    mongoURL: env('mongoURL') || 'mongodb://localhost:27017/chatRoom'

};