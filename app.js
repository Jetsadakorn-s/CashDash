'use strict'

const path = require ('path')

const AutoLoad = require ('@fastify/autoload')

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


  fastify.addHook ('onRequest', (request, reply, done) => {
      
    request [ 'MODELS' ]
      = require (path.join (__dirname, 'database/models'))
    
    done ()
  
  })
  
}
