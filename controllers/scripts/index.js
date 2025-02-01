'use strict'


module.exports = ((scripts, fs, path) => {

    fs
      .readdirSync (__dirname)
      .filter (file => file !== path.basename (__filename))
      
      .forEach (file => {

          scripts [ file.split ('.js') [ 0 ] ]
            = require (path.join (__dirname, file))

        })


    return scripts

  }) ({}, require ('fs'), require ('path'))