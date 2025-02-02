'use strict'

module.exports = async (request, reply) => {

  try {

    const { name, price, description, stock } = request.body


    const product = new request.MODELS.Product ({ 
      name, 
      price, 
      description, 
      stock 
    })


    await product.save ()

    
    return reply.code (201).send ({ 
      message: 'Product created', 
      product 
    })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
