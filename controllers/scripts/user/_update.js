'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const { name, phone, rate_discount, wallet } = request.body


    const updatedUser = await request.MODELS.User.findByIdAndUpdate(

      id,

      { 
        name, 
        phone, 
        rate_discount, 
        wallet 
      },

      { new: true }
      
    )


    if (!updatedUser) 
      return reply.code (404).send ({ error: 'User not found' })

    
    return reply.send ({ message: 'User updated', user: updatedUser })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
