'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const product = await request.MODELS.Product.findById (id)


    if (!product) 
      return reply.code (404).send ({ error: 'Product not found' })


    await request.MODELS.Order.deleteMany ({ product_id: id })
    await request.MODELS.Product.findByIdAndDelete (id)
    return reply.send ({ message: 'Product deleted' })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
