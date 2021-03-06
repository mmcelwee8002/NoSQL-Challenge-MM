const { Schema, model } = require('mongoose');



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
            type: Schema.Types.Array,
            ref: 'Thought',
            required: false
        },
        friends:{
            type: Schema.Types.Array,
            ref: 'User',
            required: false
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

// create the User Model using the Schema
const User = model('User', UserSchema);

// get total count of comments and replies on retrieval
// UserSchema.virtual('friendCount').get(function () {
//     return this.friends.length;
// });

module.exports = User;