'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id } = request.params


    const transactions 
      = await request.MODELS.Transaction.find ({ user_id })


    return reply.send (transactions)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
