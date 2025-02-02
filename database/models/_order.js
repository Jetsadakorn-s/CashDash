const mongoose = require ('mongoose')

const OrderSchema = new mongoose.Schema ({

  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  final_price: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }

})

module.exports = mongoose.model ('Order', OrderSchema)
