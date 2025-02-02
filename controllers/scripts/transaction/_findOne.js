'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params


    const transaction = await request.MODELS.Transaction.findById (id)


    if (!transaction) 
      return reply.code (404).send ({ error: 'Transaction not found' })


    return reply.send (transaction)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
