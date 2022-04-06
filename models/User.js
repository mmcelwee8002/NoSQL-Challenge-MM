const { Schema, model, Types } = require('mongoose');



const UserSchema = new Schema(

    {
        username: {
            type: String,
            unique: true,
            required: 'Username is Required',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'Email is Required',
            match: [/.+@.+\..+/]
        },
        thoughts:{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
        friends:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

// create the User Model using the Schema
const User = model('User', UserSchema);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

module.exports = User;