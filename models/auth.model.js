const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  access_role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  apiKey: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

const authModel = mongoose.model("auth", AuthSchema);

module.exports = authModel;