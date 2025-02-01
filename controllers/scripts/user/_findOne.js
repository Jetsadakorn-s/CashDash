'use strict'

const User = require ('../../../database/models/_user')

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const user = await User.findById (id)


    if (!user) 
      return reply.code (404).send ({ error: 'User not found' })


    return reply.send (user)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
