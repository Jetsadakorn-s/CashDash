'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id } = request.params
    const { title, type, amount } = request.body


    if (!title || !type || !amount || isNaN (amount) || amount <= 0) {

      return reply
        .code (400)
        .send ({ error: 'Invalid transaction data' })
        
    }


    if (!['income', 'expense'].includes (type)) {

      return reply
        .code (400)
        .send ({ error: 'Type must be income or expense' })

    }


    const user = await request.MODELS.User.findById (user_id)


    if (!user) 
      return reply.code (404).send ({ error: 'User not found' })

      
    if (type === 'income') {
      user.wallet += amount
    } 
    
    
    else {

      if (user.wallet < amount) {
        return reply
          .code (400)
          .send ({ error: 'Insufficient wallet balance' })
      }

      user.wallet -= amount

    }


    await user.save ()


    const transaction = new request.MODELS.Transaction ({ 
      user_id, 
      title, 
      type, 
      amount 
    })


    await transaction.save ()


    return reply.code (201).send ({ 
      message: 'Transaction added', 
      transaction, wallet: user.wallet 
    })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
