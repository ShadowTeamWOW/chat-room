'use strict';
/**
 * Exports an object for different page or API
 *
 * Created by Shadowlong on 15/12/1.
 */


module.exports = {

    reg: function(req, res){

        res.render('register',{
            user:'张三',
            email:'1233@qq.com',
            password:'111111',
            sex:'0'});
    }

};