const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "email required"],
        unique: [true, "email already taken"]
    },
    password: {
        type: String,
        required: [true, "password required"]
    },
    isSuperUser: {
        type: Boolean,
        required: [true, "isSuperUser required"]
    }
});

module.exports = mongoose.model("User", userSchema)