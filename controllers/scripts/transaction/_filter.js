'use strict'

module.exports = async (request, reply) => {
  try {
    const { user_id } = request.params
    const { startDate, endDate, type } = request.query


    const filter = { user_id }


    if (startDate && endDate) {

      filter.date = { 
        $gte: new Date (startDate), 
        $lte: new Date (endDate) 
      }

    }


    if (type) {

      if (![ 'income', 'expense' ].includes (type)) {

        return reply
          .code (400)
          .send ({ error: 'Type must be income or expense' })

      }


      filter.type = type

    }


    const transactions = await request.MODELS.Transaction.find (filter)
    return reply.send (transactions)

  } 
  
  
  catch (error) {
    return reply.code (500).send ({ error: error.message })
  }

}
