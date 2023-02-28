const PlanService = require("../services/plan.services");

const planRouter = require("express").Router();
const planService = new PlanService();

planRouter.post('/create')
planRouter.patch('/change_class')
planRouter.delete('/cancel')

module.exports = planRouter;