'use strict';

/**
 * Load configuration files in this directory.
 * Extend all export objects into one.
 *
 * Note: Each config file must export an OBJECT
 *
 * Author : Shadowlong Chang <i@shadowlong.me>
 *
 */
'use strict';

// Try to ues automatic way to load all routers and export with function
let arr = [];

require('fs').readdirSync(__dirname + '/').forEach(function(v, i){

    // Do not load itself
    if(v !== 'config_loader.js' && v.match(/\.js$/) !== null){

        const name = v.replace('.js', '');

        arr.push( require('./' + name) );

    }

});

let emptyObj = {};

arr.forEach(function(v){

    Object.assign(emptyObj, v);

});

module.exports = emptyObj;