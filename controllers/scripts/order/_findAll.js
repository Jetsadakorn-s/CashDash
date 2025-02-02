'use strict'

module.exports = async (request, reply) => {

  try {

    const orders 
      = await request.MODELS.Order.find ().populate ('user_id')

    return reply.send(orders)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
