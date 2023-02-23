if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const api_version = "v1";

app.get(`/${api_version}`, (req, res, next) => {
  return res.status(200).json({
    status: "success",
    message: "Welcome to Startup Plan APIService v1",
  });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Startup Plan APIService is running on port ${PORT}`)
})