'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const product = await request.MODELS.Product.findById (id)

    if (!product) return reply
      .code (404)
      .send ({ error: 'Product not found' })

    return reply.send (product)
    
  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }
  
}
