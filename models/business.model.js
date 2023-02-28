const mongoose = require("mongoose");

const { Schema } = mongoose;

const BusinessSchema = new Schema({
   name: {
    type: String,
    required: true,
   },
   business_id: {
    type: String,
    required: true,
   },
   documents: {
    type: [{
      company_address: String,
      company_email: String,
      company_number: String,
      identity_card: String,
      cac_approval: String,
      director_name: String,
      shareholder_name: String,
      object_of_company: String,
      statutory_fees: String,
      stamp_duty: String,
      incorporation_certificate: String,
      company_resolution: String,
    }],
    required: true
   },
   plan_classes: {
    type: [{
      class_name: {
        type: String,
        enum: ["SOLE PROPRIETORSHIP", "PARTNERSHIP", "CORPORATION", "S CORPORATION", "LIMITED LIABILITY COMPANY"]
      },
      price: Number,
    }],
    required: true,
   }
});

const businessModel = mongoose.model('business', BusinessSchema);

module.exports = businessModel;