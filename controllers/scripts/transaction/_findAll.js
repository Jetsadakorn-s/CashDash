'use strict'

module.exports = async (request, reply) => {

  try {

    const transactions = await request.MODELS.Transaction.find ()
    return reply.send (transactions)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }
  
}
