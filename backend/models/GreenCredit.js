const mongoose = require('mongoose');

const greenCreditSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activities: [{ 
    type: String, 
    required: true 
  }],
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const GreenCredit = mongoose.model('GreenCredit', greenCreditSchema);
module.exports = GreenCredit;
