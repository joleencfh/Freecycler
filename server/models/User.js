const mongoose = require('./index');
const Login = require('./Login');
const Pile = require('./Pile');
const { Schema } = mongoose;

const UserSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    login: {
        type: Login,
        required: true,
    },
    favorites: {
        type: Array[Pile],
        required: false,
    },
    
});

const User = mongoose.model('User', UserSchema);

module.exports = User;