'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params


    const deletedProduct 
      = await request.MODELS.Product.findByIdAndDelete (id)


    if (!deletedProduct) 
      return reply.code (404).send ({ error: 'Product not found' })

    return reply.send ({ message: 'Product deleted' })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
