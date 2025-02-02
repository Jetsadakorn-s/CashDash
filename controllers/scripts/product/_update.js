'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const { name, price, description, stock } = request.body


    const updatedProduct 

      = await request.MODELS.Product.findByIdAndUpdate (

        id,
        { name, price, description, stock },
        { new: true }
        
      )


    if (!updatedProduct) 
      return reply
        .code (404)
        .send ({ error: 'Product not found' })


    return reply.send ({ 
      message: 'Product updated', 
      product: updatedProduct 
    })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
