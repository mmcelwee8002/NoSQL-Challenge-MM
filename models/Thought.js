const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(

    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Reaction required',
            maxlength: 280
        },
        userName: {
            type: String,
            Required: 'UserName required'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
    },
    {
        toJSON: {

            getters: true
        }
    }

)

const ThoughtSchema = new Schema(
    // set custom id to avoid confusion with parent comment _id
    {
        thoughtText: {
            type: String,
            required: 'Please enter your thoughts',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        userName: {
            type: String,
            required: 'username required to post'
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }

)
// create the Thought Model using the Schema
const Thought = model('Thought', ThoughtSchema);

// get total count of friends on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


module.exports =  Thought 