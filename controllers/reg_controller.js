'use strict';
/**
 * Exports an object for different page or API
 *
 * Created by Shadowlong on 15/12/1.
 */


module.exports = {

    reg: function(req, res){

       /* res.rander('../view/register.html',{
            user:'',
            email:'',
            password:'',
            sex:''
        });*/
        res.render('register',{});
    }

};