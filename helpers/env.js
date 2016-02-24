/**
 * Environment get from .evn.json file and set global ENV in process.env.
 * The Functionality depends on numbers of arguments to get or set.
 *
 * Author: Shadowlong Chang <i@shadowlong.me>
 *
 */

'use strict';

module.exports = function(key, value){

    if(!key){ throw new Error('The arguments is null!'); }

    // Return value from .env.json
    if(!value){

        const envObj = require( '../.env' ); // Get .evn.json

        return !envObj[key] ? null : envObj[key];

    }

    // Set process.env
    if(key && value){

        process.env[key] = value;

    }

};