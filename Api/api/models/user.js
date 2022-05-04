const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String,
        required: true, 
        unique: true ,
        // match: regular expression on stack overflaw
    },
    password: { type: String, required: true},
    role: { type: String }
});

module.exports = mongoose.model('User', userSchema);