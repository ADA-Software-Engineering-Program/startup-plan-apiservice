const mongoose = require("mongoose");

const { Schema } = mongoose;

const BusinessSchema = new Schema({
   business_name: {
    type: String,
    required: true,
   },
   company_address: {
    type: String,
    required: true
   },
    company_email: {
    type: String,
    required: true,
    unique: true,
   },
    company_number: {
    type: String,
    required: true
   },
    identity_card: {
    type: String,
    required: true
   },
    cac_approval: {
    type: String,
    required: true
   },
    director_name: {
    type: String,
    required: true
   },
    shareholder_name: {
    type: String,
    required: true
   },
    object_of_company: {
    type: String,
    required: true
   },
    statutory_fees: {
    type: String,
    required: true
   },
    stamp_duty: {
    type: String,
    required: true
   },
    incorporation_certificate: {
    type: String,
    required: true
   },
    company_resolution: {
    type: String,
    required: true
   },
   business_type: {
    type: String,
    enum: ["Partnership", "Corporation", "Sole_Proprietorship", "Limited_liability_company", "Sole_Corporation"],
    required: true,
   },
});

const businessModel = mongoose.model('business', BusinessSchema);

module.exports = businessModel;