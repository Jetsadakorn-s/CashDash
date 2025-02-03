'use strict'

const Bcrypt = require ('bcrypt')

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
      

    const salt = Bcrypt.genSaltSync (10)
    console.log ("salt: ", salt)
    const passwordhash = Bcrypt.hashSync (password, salt)
    console.log ("passwordhash: ", passwordhash)


    const user = await request.MODELS.User.create ({ 
      name, 
      email, 
      passwordhash, 
      phone,
      rate_discount,
      wallet
    })

    // await user.save ()

    return reply.code(201).send({ message: 'User created', user })

  } 
  
  
  catch (error) {
    return reply.code(500).send({ error: error.message })
  }
  
}
