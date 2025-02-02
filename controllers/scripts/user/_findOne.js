'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const user = await request.MODELS.User.findById (id)


    if (!user) 
      return reply.code (404).send ({ error: 'User not found' })


    return reply.send (user)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
