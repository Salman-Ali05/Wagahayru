const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        default: "New user"
    },
    password: {
        type: String,
        required: [true, 'Veuillez saisi un mdp, BarakhAllahou\'fik'],
        unique: true
    },
    userPic: {
        type: String,
        required: false,
        unique: false,
        default: "../public/images/gintama.jpg"
    }
})

const User = mongoose.model('User', UserSchema);
UserSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})
module.exports = User;