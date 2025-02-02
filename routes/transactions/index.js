'use strict'

module.exports = async function (fastify, opts) {

  fastify.delete ('/:id', fastify.CONTROLLERS._transaction.destroy)
  fastify.get ('/', fastify.CONTROLLERS._transaction.findAll)
  fastify.get ('/:id', fastify.CONTROLLERS._transaction.findOne)
  fastify.patch ('/:id', fastify.CONTROLLERS._transaction.update)
  fastify.post ('/:user_id', fastify.CONTROLLERS._transaction.create)
  
  fastify.get (
    '/balance/:user_id', 
    fastify.CONTROLLERS._transaction.balance
  )
  
  fastify.get (
    '/filter/:user_id', 
    fastify.CONTROLLERS._transaction.filter
  )

  fastify.get (
    '/user/:user_id', 
    fastify.CONTROLLERS._transaction.findByUser
  )

}