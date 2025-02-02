'use strict'

module.exports = async (request, reply) => {

  try {

    const { user_id } = request.params
    const currentYear = new Date ().getFullYear ()
    const lastYear = currentYear - 1

    
    const transactionsCurrentYear 

      = await request.MODELS.Transaction.find ({

        user_id,

        date: { 
          $gte: new Date (`${ currentYear }-01-01`), 
          $lt: new Date (`${ currentYear + 1 }-01-01`) 
        }
        
      })


    const transactionsLastYear 

      = await request.MODELS.Transaction.find ({

        user_id,

        date: { 
          $gte: new Date (`${ lastYear }-01-01`), 
          $lt: new Date (`${ currentYear }-01-01`) 
        }

      })


    const currentYearSummary 

      = transactionsCurrentYear.reduce ((acc, t) => {

          if (t.type === 'income') {
            acc.income += t.amount
          } 
          
          
          else {
            acc.expense += t.amount
          }


          return acc

        },{ 

          income: 0, 
          expense: 0 

      })


    const lastYearSummary = transactionsLastYear.reduce ((acc, t) => {

        if (t.type === 'income') {
          acc.income += t.amount
        } 
        
        
        else {
          acc.expense += t.amount
        }


        return acc

      },{ 
        
        income: 0, 
        expense: 0 

    })


    const incomeGrowth = lastYearSummary.income
      ? ((currentYearSummary.income - lastYearSummary.income) / lastYearSummary.income) * 100
      : 0


    const expenseGrowth = lastYearSummary.expense
      ? ((currentYearSummary.expense - lastYearSummary.expense) / lastYearSummary.expense) * 100
      : 0


    return reply.send ({

      currentYear: currentYearSummary,
      lastYear: lastYearSummary,
      incomeGrowth,
      expenseGrowth

    })

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
