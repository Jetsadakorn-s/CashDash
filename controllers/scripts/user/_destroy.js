'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params


    const user = await request.MODELS.User.findById (id)


    if (!user) 
      return reply.code (404).send ({ error: 'User not found' })


    await request.MODELS.Transaction.deleteMany ({ user_id: id })
    await request.MODELS.Order.deleteMany ({ user_id: id })
    await request.MODELS.User.findByIdAndDelete (id)
    return reply.send ({ message: 'User deleted' })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
