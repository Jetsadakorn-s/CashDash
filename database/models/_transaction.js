'use strict'

const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema ({

  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },

  title: { type: String, required: true },
  type: { type: String, enum: [ 'income', 'expense' ], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }

})

module.exports = mongoose.model ('Transaction', TransactionSchema)
