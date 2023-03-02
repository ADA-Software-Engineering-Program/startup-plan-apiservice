const { AuthForbiddenException, ValidationException } = require("../@helpers/errorHandlers")

const authModel = require("../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

    const user =   await authModel.findOne({ username: username.toLowerCase() }).exec();
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
  try {

   //check if user exist already
    const user =   await authModel.findOne({ username: username.toLowerCase() }).exec();

    if(!user) {
      //this means there is a user
      res.status(403).json({
        status: "unsuccessful",
        message: "user not found, create an account"
      });
    }

    const isCorrectPassword = await bcrypt.compareSync(password, user.password);

    console.log("password_test", isCorrectPassword)

    if(isCorrectPassword) {
      res.status(403).json({
        status: "unsuccessful",
        message: "Incorrect or invalid credentials"
      });
    } 

    const tokenPayload = {
      username: user.username,
    };

    const access_token = await jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: "15m" });

    res.status(201).json({
      status: "success",
      message: "User login successfully",
      access_token: access_token,
    });
  } catch(error) {
    console.log(error)
    next(error);
  }
}

module.exports = {
  register, login
}