'use strict'

module.exports = async function (fastify, opts) {

  fastify.delete ('/:id', fastify.CONTROLLERS._user.destroy)
  fastify.get ('/', fastify.CONTROLLERS._user.findAll)
  fastify.get ('/:id', fastify.CONTROLLERS._user.findOne)
  fastify.patch ('/:id', fastify.CONTROLLERS._user.update)
  fastify.post ('/', fastify.CONTROLLERS._user.create)

  fastify.patch ('/wallet/:user_id', fastify.CONTROLLERS._user.updateWallet)

}