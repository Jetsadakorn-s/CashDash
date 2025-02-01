const mongoose = require ('mongoose')

const OrderSchema = new mongoose.Schema ({

  customerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  finalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }

})

module.exports = mongoose.model ('Order', OrderSchema)
