const PlanService = require("../services/plan.services");

const planRouter = require("express").Router();
const planService = new PlanService();

// planRouter.post('/create')
// planRouter.delete('/cancel/:plan_id')
planRouter.patch('/change_class/:plan_id')

module.exports = planRouter;