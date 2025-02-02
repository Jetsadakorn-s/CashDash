'use strict'

const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Number, required: true, default: 0 },
  created_at: { type: Date, default: Date.now }
  
})

module.exports = mongoose.model('Product', ProductSchema)
