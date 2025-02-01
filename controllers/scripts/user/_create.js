'use strict'

const User = require ('../../../database/models/_user')

module.exports = async (request, reply) => {

  try {

    const { name, email, password, phone } = request.body

    const user = new User({ name, email, password, phone })
    await user.save()

    return reply.code(201).send({ message: 'User created', user })

  } 
  
  
  catch (error) {
    return reply.code(500).send({ error: error.message })
  }
  
}
