'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id } = request.params


    const user = await request.MODELS.User.findById (user_id)


    if (!user) 
      return reply.code (404).send ({ error: 'User not found' })

    return reply.send ({ balance: user.wallet })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
