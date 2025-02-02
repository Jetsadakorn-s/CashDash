'use strict'


module.exports = ((session, fs, path) => {

    fs
      .readdirSync (__dirname)
      .filter (file => file !== path.basename (__filename))
      
      .forEach (file => {

          session [ file.split ('.js') [ 0 ] ]
            = require (path.join (__dirname, file))

        })


    return session

  }) ({}, require ('fs'), require ('path'))