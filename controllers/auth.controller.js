const { AuthForbiddenException, ValidationException } = require("../@helpers/errorHandlers")

const authModel = require("../models/auth.model");
const bcrypt = require("bcryptjs");

async function register(req, res, next) {
  const { username, password, email} = req.body;
  try {

    if(!username) {
      throw new ValidationException("username is required", 400);
    }

    if(!password) {
      throw new ValidationException("password is required", 400);
    }

    if(!email) {
      throw new ValidationException("email is required", 400);
    }

    const user = await authModel.findOne({ username: username.toLowerCase() }).exec();
    const user_email = await authModel.findOne({ email: email.toLowerCase() }).exec();

    if(!user || !user_email) {
      //continue registration
      //hash password
      const hashPassword = await bcrypt.hash(password, 10);

      const newAuth = new authModel({
        username,
        email,
        pwd: hashPassword
      });

      await newAuth.save();

      const { pwd , ...results } = newAuth._doc;

      res.status(201).json({
        status: "success",
        message: "User created successfully",
        data: results
      });
    } else {
        throw new AuthForbiddenException("user already exist", 403);
    }
  } catch(error) {
    console.log(error)
    next(error);
  }
}

async function login(req, res, next) {
  const { username, password } = req.body;
}

module.exports = {
  register, login
}