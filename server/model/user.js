var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = new schema(
    {
        userName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    }
)
var userModel = mongoose.model("users", userSchema, "users");
module.exports = userModel;