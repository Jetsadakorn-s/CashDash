'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id } = request.params


    const orders = await request.MODELS.Order.find ({ 
      user_id 
    })

    return reply.send (orders)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
