'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id, product_id, quantity } = request.body
    const user = await request.MODELS.User.findById (user_id)


    if (!user) 
      return reply.code (404).send ({ error: 'User not found' })


    const product = await request.MODELS.Product.findById (product_id)


    if (!product) 
      return reply.code (404).send ({ error: 'Product not found' })


    let finalPrice = product.price * quantity


    if (user.rate_discount) {
      finalPrice -= (finalPrice * user.rate_discount) / 100
    }


    if (user.wallet < finalPrice) {

      return reply
        .code (400)
        .send ({ error: 'Insufficient wallet balance' })

    }


    user.wallet -= finalPrice
    await user.save ()


    const order = new request.MODELS.Order ({

      user_id,
      product_name: product.name,
      product_price: product.price,
      final_price: finalPrice,
      quantity

    })


    await order.save ()
    return reply.code (201).send ({ message: 'Order created', order })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
