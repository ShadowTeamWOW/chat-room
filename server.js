/**
 * Chat Room test project
 *
 * All code should follow ECMScript 6
 *
 * author: Shadowlong Chang <i@shadowlong.me>
 *
 * TODO: Use cluster for online version
 *
 */

'use strict';

const express    = require('express');
const path       = require('path');
const app        = express();
const bodyParser = require('body-parser');
const config     = require('./config/config_loader');
const router     = require('./routes/route_loader');
const env        = require('./helpers/helper_loader')('env');
const io         = require('socket.io'); // Client side for connect to woshuo server

// Set view folder
app.set('views', path.join(__dirname, 'views'));

// Set Public folder as www root
app.use(express.static('public'));

// Use body parser for handle post requests
app.use( bodyParser() );

// Routes Main entrance
router(app);

app.listen(5991, function(){

    const port = this.address().port;

    console.log('Server -Woshuo.co- is listening at 127.0.0.1:'+ port);

    // Connect to Woshuo server from socket.io

});

module.exports = { app: app, io: io };