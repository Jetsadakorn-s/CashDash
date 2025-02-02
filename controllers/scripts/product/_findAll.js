'use strict'

module.exports = async (request, reply) => {

  try {

    const products = await request.MODELS.Product.find ()
    return reply.send (products)
    
  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
