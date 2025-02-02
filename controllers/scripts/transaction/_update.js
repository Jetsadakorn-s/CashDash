'use strict'

module.exports = async (request, reply) => {

  try {

    const { id } = request.params
    const updateData = request.body


    const transaction = await request.MODELS.Transaction.findById (id)


    if (!transaction) 
      return reply.code (404).send ({ error: 'Transaction not found' })


    const user 
      = await request.MODELS.User.findById (transaction.user_id)


    if (!user) 
      return reply.code (404).send ({ error: 'User not found' })

    
    if (updateData.amount && updateData.amount !== transaction.amount) {

      if (transaction.type === 'income') {
        user.wallet -= transaction.amount
        user.wallet += updateData.amount
      } 
      

      else {

        user.wallet += transaction.amount


        if (user.wallet < updateData.amount) {

          return reply
            .code (400)
            .send ({ error: 'Insufficient wallet balance' })

        }


        user.wallet -= updateData.amount

      }


      await user.save()

    }


    Object.assign (transaction, updateData)
    await transaction.save ()


    return reply.send ({ 
      message: 'Transaction updated', 
      transaction, wallet: user.wallet 
    })

  } 
  
  
  catch (error) {
    return reply.code(500).send({ error: error.message })
  }

}
