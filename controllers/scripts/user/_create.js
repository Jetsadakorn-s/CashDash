'use strict'

const Bcrypt = require ('bcryptjs')

module.exports = async (request, reply) => {


  try {

    const { 
      name, 
      email,
      password,
      phone, 
      rate_discount, 
      wallet 
    } = request.body
      

    const salt = await Bcrypt.genSalt (10)
    const passwordhash = await Bcrypt.hash (password, salt)


    const user = await request.MODELS.User.create ({ 
      name, 
      email, 
      passwordhash, 
      phone,
      rate_discount,
      wallet
    })


    return reply.code(201).send({ message: 'User created', user })

  } 
  
  
  catch (error) {
    return reply.code(500).send({ error: error.message })
  }
  
}
