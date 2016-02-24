/**
 * The main route entrance for handling Section Routers,
 * Like public homepage / Control panel APIs / public APIs and so on...
 * In this file we just declare the loader of each sections
 *
 * Note: Each route mush export as the same pattern like : { path: '/', router }
 *
 * Author : Shadowlong Chang <i@shadowlong.me>
 *
 */
'use strict';

// Try to ues automatic way to load all routers and export with function
let arr = [];

require('fs').readdirSync(__dirname + '/').forEach(function(v, i){

    // Do not load itself
    if(v !== 'route_loader.js' && v.match(/\.js$/) !== null){

        const name = v.replace('.js', '');

        arr.push( require('./' + name) );

    }

});

module.exports = function(app){

    if(!arr.length){ return false; }

    arr.forEach(function(v){

        app.use(v.path, v.router);

    });

};

