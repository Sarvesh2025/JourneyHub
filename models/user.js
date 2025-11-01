const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        url: String,
        filename: String
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);