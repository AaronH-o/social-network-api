const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const validateEmail = function (email) {
    let re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (e) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
                },
                message: 'Invalid email address',
            },
        },
        thoughts: [
            {
                type: Schema.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.ObjectId,
                ref: 'user',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;