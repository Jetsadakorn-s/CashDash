'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params


    const order 
      = await request.MODELS.Order.findById (id).populate ('user_id')


    if (!order) 
      return reply.code (404).send ({ error: 'Order not found' })


    return reply.send(order)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
