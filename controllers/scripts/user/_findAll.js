'use strict'

const User = require ('../../../database/models/_user')

module.exports = async (request, reply) => {

  try {

    const users = await User.find ()
    return reply.send (users)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
