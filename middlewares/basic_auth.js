const { InvalidOrExpiredAuthToken } = require("../@helpers/errorHandlers");
const authModel = require("../models/auth.model");
const bcrypt = require("bcryptjs")

async function verifyAuth(req, res, next) {
  try {
    console.log(req.headers)
    if (!req.headers.authorization) {
      throw new InvalidOrExpiredAuthToken("auth token missing", 403);
    }

    const token = req.headers.authorization.split(" ")[1];

    const userCred = Buffer.from(token, "base64").toString();

    const username = userCred.split(":")[0];
    const pass = userCred.split(":")[1];

    const auth = await authModel.findOne({ username: username.toLowerCase() }).exec();

    if (!auth) {
      throw new InvalidOrExpiredAuthToken("access denied", 403);
    }

    const isPassword = await bcrypt.compare(pass, auth.pwd);

    if (!isPassword) {
      throw new InvalidOrExpiredAuthToken("invalid or expired creds", 403);
    }

      next();
    } catch (error) {
      next(error);  
    }
    
}

module.exports = {
  verifyAuth
}