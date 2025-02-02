'use strict'

module.exports = async function (fastify, opts) {

  fastify.delete ('/:id', fastify.CONTROLLERS._product.destroy)
  fastify.get ('/', fastify.CONTROLLERS._product.findAll)
  fastify.get ('/:id', fastify.CONTROLLERS._product.findOne)
  fastify.patch ('/:id', fastify.CONTROLLERS._product.update)
  fastify.post ('/', fastify.CONTROLLERS._product.create)

}