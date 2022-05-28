const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    // profile: {
    //     type: String
    // },
    phone_number: {
        type: Number
    }
});

module.exports = model = mongoose.model('users', userSchema);

