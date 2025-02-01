'use strict'


module.exports = ((controllers, fs, path) => {

    fs
      .readdirSync (__dirname)
      .filter (file => file !== path.basename (__filename))
      
      .forEach (file => {

          controllers [ file.split ('.js') [ 0 ] ]
            = require (path.join (__dirname, file))

        })


    return controllers

  }) ({}, require ('fs'), require ('path'))