'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id } = request.params


    const transactions 
      = await request.MODELS.Transaction.find ({ user_id })


    const summary = transactions.reduce ((acc, t) => {

        if (t.type === 'income') {
          acc.totalIncome += t.amount
        } 
        
        
        else {
          acc.totalExpense += t.amount
        }


        return acc

      }, { 

        totalIncome: 0, 
        totalExpense: 0 

    })


    return reply.send (summary)

  } 
  

  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
