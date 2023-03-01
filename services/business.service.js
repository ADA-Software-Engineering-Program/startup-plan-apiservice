const businessModel = require("../models/business.model");

class BusinessService {
  constructor() {}

  async addBusiness(payload) {
    const { name, documents, plan_classes} = payload;

    const randomInt1 = Math.floor(Math.random() * 10 ) + 1;
    const randomInt2 = Math.floor(Math.random() * 10 ) + 1;
    const randomInt3 = Math.floor(Math.random() * 10 ) + 1;

    const business_id = `B${randomInt1}B${randomInt2}B${randomInt3}`;

    try {
      const business = new businessModel({
        name,
        business_id,
        plan_classes,
        documents
      });

      await business.save();
      return business;
    } catch (e) {
      return e;
    }
  }

  async getTemplateForBusiness(business_id) {
    try {
      const formatSimple = [
        {
          "company description": "A food Company",
          "suppliers": "Kaduna foods",
          "customer segments": "good",
          "marketing plan": "grassroots"
        },
      ];

      const formatExecutive = [
        {
          "executive summary": "A shoe Company",
          "company overview": "We sell shoes",
          "market analysis": "good",
          "product and service":"quality footwear" ,
          "customer segmentation": "youths",
          "marketing plan": "grassroots",
          "logistics and operations plan": "delivery and waybill",
          "financial_plan": "get loan"
        },
      ];

      
    } catch (e) {
      return e;
    }
  }

  async getBusinessplanAvailability(business_id) {
    
  }
  
}

module.exports = BusinessService;