'use strict'

module.exports = async (request, reply) => {

  try {

    const users = await request.MODELS.User.find ()
    return reply.send (users)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
