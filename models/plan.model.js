const mongoose = require("mongoose");

const { Schema } = mongoose;

const PlanSchema = new Schema({
  business_name: {
    type: String,
    required: true,
  },
  plan_number: {
    type: String,
    required: true,
  },
  company_address: {
    type: String,
    required: true,
  },
  company_email: {
    type: String,
    required: true,
    unique: true,
  },
  company_number: {
    type: String,
    required: true,
  },
  class:{
    type: String,
    enum: ["SOLE PROPRIETORSHIP", "PARTNERSHIP", "CORPORATION", "S CORPORATION", "LIMITED LIABILITY COMPANY"],
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  client_name: {
    type: String,
    required: true,
  },
  client_email: {
    type: String,
    required: true,
  },
  proposal_date: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  }
});

const planModel = mongoose.model('plan', PlanSchema);

module.exports = planModel;