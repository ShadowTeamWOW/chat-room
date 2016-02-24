'use strict';
/**
 * Woshuo Management Platform API support.
 *
 * Created by Shadowlong <i@shadowlong.me>
 */

//const APICModel = require();

module.exports = {

    /**
     * The root Controller to block user view this.
     * URL: /APIC/
     */
    root: function(req, res){

        res.json({
            status: 200,
            message: 'Everything is working fine.'
        });

    }

};