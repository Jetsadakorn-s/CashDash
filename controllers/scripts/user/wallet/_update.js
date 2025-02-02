'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id } = request.params
    const { amount, type } = request.body


    if (!amount || isNaN (amount) || amount <= 0) {

      return reply
        .code (400)
        .send ({ error: 'Amount must be a positive number' })

    }


    const user = await request.MODELS.User.findById (user_id)


    if (!user) return reply
      .code (404)
      .send ({ error: 'User not found' })


    if (type === 'topup') {
      user.wallet += amount
    } 
    

    else if (type === 'deduct') {

      if (user.wallet < amount) {

        return reply
          .code (400)
          .send ({ error: 'Insufficient wallet balance' })

      }

      user.wallet -= amount

    } 
    

    else {

      return reply
        .code (400)
        .send ({ error: 'Invalid transaction type' })

    }


    await user.save ()


    return reply.send ({ 
      message: 'Wallet updated', 
      wallet: user.wallet 
    })

  } 


  catch (error) { 
    return reply.code (500).send ({ error: error.message })
  }
}
