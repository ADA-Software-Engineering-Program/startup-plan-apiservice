const BusinessService = require("../services/business.service");

const businessRouter = require("express").Router();
const businessService = new BusinessService();

businessRouter.post('/', )
businessRouter.get('/:business_id/templates', )
businessRouter.get('/:business_id/businessplan_availability', )

module.exports = businessRouter;