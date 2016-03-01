'use strict';
/**
 *
 *
 */
module.exports = {
    validToken: function(req,res,next){
        console.log('do some vaild things!');
        next();
    }
};
