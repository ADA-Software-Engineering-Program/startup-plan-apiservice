if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const connectDb = require("./@helpers/db");
const { register } = require("./controllers/auth.controller");
const businessRouter = require("./routes/business.router");
const planRouter = require("./routes/plan.router");

const app = express();
connectDb();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const api_version = "v1";

app.get(`/${api_version}`, (req, res, next) => {
  return res.status(200).json({
    status: "success",
    message: "Welcome to Startup Plan APIService v1",
  });
})

app.use(`/${api_version}/businesses`, businessRouter);
app.use(`/${api_version}/plans`, planRouter);
app.post(`/${api_version}/auth/signup`, register);

//error middleware

app.use((error, req, res, next) => {
  const statusCode = error.statusCode ? error.statusCode : 500;
  let message = error.message;
  if (statusCode == 500) {
    message = "An error occurred on our server, we have been notified";
  }

  res.status(statusCode).json({
    status: "error",
    message: message,
    error_code: statusCode,
    data: null
  });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Startup Plan APIService is running on port ${PORT}`)
})