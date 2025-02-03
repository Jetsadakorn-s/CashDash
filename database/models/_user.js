'use strict'

const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema ({

  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordhash: { type: String, required: true },
  phone: { type: String, required: true },
  rate_discount: { type: Number, default: null },
  wallet: { type: Number, default: 0 }

})

module.exports = mongoose.model('User', UserSchema)
