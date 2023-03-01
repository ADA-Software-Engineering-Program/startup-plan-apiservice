const BusinessService = require("../services/business.service");

const businessService = new BusinessService();

async function addBusiness(req, res, next) {
  try {

    const results = await businessService.addBusiness(req.body);

    return res.status(201).json({
      status: "success",
      message: "Business added successfully",
      data: results
    });
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
      data: null
    });
  }
}

module.exports = { addBusiness };