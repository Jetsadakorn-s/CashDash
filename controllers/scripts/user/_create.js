'use strict'

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


    const user = await request.MODELS.User ({ 
      name, 
      email, 
      password, 
      phone,
      rate_discount,
      wallet
    })

    await user.save()

    return reply.code(201).send({ message: 'User created', user })

  } 
  
  
  catch (error) {
    return reply.code(500).send({ error: error.message })
  }
  
}
