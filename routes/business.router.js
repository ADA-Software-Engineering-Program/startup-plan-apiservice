const { addBusiness } = require("../controllers/business.controller");
const BusinessService = require("../services/business.service");

const businessRouter = require("express").Router();

businessRouter.post('/', addBusiness)
businessRouter.get('/:business_id/templates', )
// businessRouter.get('/:business_id/businessplan_availability', )

module.exports = businessRouter;