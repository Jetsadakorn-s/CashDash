'use strict'

const path = require ('path')

const AutoLoad = require ('@fastify/autoload')

const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')


module.exports = async function (fastify, opts) {
  
  ;(function register (elements, i) {

    if (i >= elements.length) { return }
  
    fastify.register (AutoLoad, {
      dir: path.join (__dirname, elements [ i ]),
      options: Object.assign ({}, opts)
    })

    return register (elements, ++i)

  }) ([ 'routes' ], 0)


  fastify.decorate (
    'CONTROLLERS',
    require (path.join (__dirname, 'controllers'))
  )
  

  // fastify.decorate ('MODELS', require ('./models'))

  
  mongoose.connect ('mongodb://mongo_db/cashDash')
  .then (() => console.log ('MongoDB connected'))
  .catch (err => console.error ('MongoDB connection error:', err))

}
