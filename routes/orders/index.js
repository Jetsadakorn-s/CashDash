'use strict'

module.exports = async function (fastify, opts) {

  fastify.delete ('/:id', fastify.CONTROLLERS._order.destroy)
  fastify.get ('/', fastify.CONTROLLERS._order.findAll)
  fastify.get ('/:id', fastify.CONTROLLERS._order.findOne)
  fastify.post ('/', fastify.CONTROLLERS._order.create)
  
  fastify.get ('/user/:user_id', fastify.CONTROLLERS._order.findByUser)

}