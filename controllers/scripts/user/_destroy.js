'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const deletedUser = await request.MODELS.User.findByIdAndDelete (id)


    if (!deletedUser) 
      return reply.code (404).send ({ error: 'User not found' })


    return reply.send ({ message: 'User deleted' })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
