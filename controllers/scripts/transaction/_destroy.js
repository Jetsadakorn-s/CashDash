'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params


    const transaction = await request.MODELS.Transaction.findById(id)


    if (!transaction) 
      return reply.code (404).send ({ error: 'Transaction not found' })


    const user 
      = await request.MODELS.User.findById (transaction.user_id)


    if (user) {

      if (transaction.type === 'income') {
        user.wallet -= transaction.amount
      } 
      

      else {
        user.wallet += transaction.amount
      }


      await user.save ()

    }


    await request.MODELS.Transaction.findByIdAndDelete (id)


    return reply.send ({ 
      message: 'Transaction deleted', 
      refundedAmount: transaction.amount, 
      wallet: user.wallet
    })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
