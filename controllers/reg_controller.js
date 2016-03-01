'use strict';
/**
 * Exports an object for different page or API
 *
 * Created by Shadowlong on 15/12/1.
 */


module.exports = {

    reg: function (req, res) {

        res.render('register', { });
    },
    regDB: function (req, res) {
        var bodyData = req.body;
        res.send({code: '200', msg: 'suss1'});
        res.end();

    }

};