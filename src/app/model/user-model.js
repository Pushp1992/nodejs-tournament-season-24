// user List model which expose the schema of user with it's respective fields

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    created_at: Date,
    subscription_type: String,
    validity_till: Date
}, {
    timeStamps: true
});

module.exports = mongoose.model('UserList', UserSchema);