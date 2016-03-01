/**
 * User signin Model
 *
 * Author: Shadowlong Chang <i@shadowlong.me>
 *
 */
'use strict';

const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config/database');

module.exports = {

    //
    signin: function(username, passwd){

        // Connect to mongoDB
        MongoClient.connect(dbConfig.mongoURL, function(err, db){

            if(err){

                console.log('Failed connect to mongoDB.');

                return false;

            }

            const collection = db.collection('users');

            // Trying to find
            collection.findOne({username: username, password: passwd}, function(err, doc){

                if(err){

                    console.log('Get user failed.');
                    return false;

                }

                console.log(doc);

            });

        });

    }

};
