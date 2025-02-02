'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id } = request.params
    const currentYear = new Date ().getFullYear ()


    const transactions = await request.MODELS.Transaction.find ({

      user_id,

      date: {
        $gte: new Date (`${ currentYear }-01-01`),
        $lt: new Date (`${ currentYear + 1 }-01-01`)
      }

    })


    const monthlySummary = Array.from ({ length: 12 }, (_, i) => ({
      month: i + 1,
      income: 0,
      expense: 0
    }))


    transactions.forEach (t => {

      const month = t.date.getMonth ()


      if (t.type === 'income') {
        monthlySummary [ month ].income += t.amount
      } 
      

      else {
        monthlySummary [ month ].expense += t.amount
      }

    })

    return reply.send (monthlySummary)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
