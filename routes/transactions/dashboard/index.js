'use strict'

module.exports = async function (fastify, opts) {
  
  fastify.get ('/:user_id', fastify.CONTROLLERS._dashboard.summary)

  fastify.get (
    '/compare/:user_id', 
    fastify.CONTROLLERS._dashboard.compare
  )

  fastify.get (
    '/yearly/:user_id', 
    fastify.CONTROLLERS._dashboard.yearly
  )

}