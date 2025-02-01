'use strict'


module.exports = async (request, reply) => {

  try {

    // const user = await request.MODELS.BankAccount.findAll ({
    //   where: { business_id: user.session.business_id }
    // })


    // return reply.code (200).send (accounts)

  } 
  
  
  catch (error) {
    reply.code (500).send (error.reply ?? error)
  }

}
