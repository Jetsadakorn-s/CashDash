'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const order = await request.MODELS.Order.findById (id)


    if (!order) 
      return reply.code (404).send ({ error: 'Order not found' })


    const user = await request.MODELS.User.findById (order.user_id)


    if (user) {

      user.wallet += order.final_price
      await user.save ()

    }


    await request.MODELS.Order.findByIdAndDelete (id)


    return reply.send ({ 
      message: 'Order cancelled and refund issued', 
      refundedAmount: order.final_price 
    })
      
  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
