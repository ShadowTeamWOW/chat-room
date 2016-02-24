/**
 * It is a helper loader, Load single or multiple helpers
 * Export an single function or extended object contains all functions.
 *
 * Usage :
 *
 * const ENV = require('helper_loader')('env'); // Load single helper;
 * const helpers = require('helper_loader')([{'export': 'env', 'file_path': './env'}, {'export': 'dateTime', 'file_path': './date_time'}, ...]); // Load Multiple
 *
 * Note: Each helper file could exports function or object
 *
 * Author : Shadowlong Chang <i@shadowlong.me>
 *
 */
'use strict';

module.exports = function(arg){

    // Check file validation
    function checkFile(file){

        // Do not load itself
        return file !== 'helper_loader';

    }

    // Check argument is an array
    if(typeof arg === 'object' && arg.length !== 0){

        let returnObj = {};

        arg.forEach(function(argObj){

            if(!checkFile(argObj.file_path)){ throw new Error('The file ['+argObj.file_path+'.js] does not exist!'); }

            // Using Object.assign() to merge Objects
            returnObj[argObj.export] = require(__dirname + '/' + argObj.file_path);

        });

        return returnObj;

    }else{

        // Here arg is a string for single file load
        if(checkFile(arg)){

            return require(__dirname + '/' + arg);

        }

        throw new Error('The file ['+arg+'.js] does not exist!');

    }

};



