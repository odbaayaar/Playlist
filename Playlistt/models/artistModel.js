const {Schema, Types, model} = require('mongoose');
const { User } = require('./userModel');

const artistSchema= new Schema({
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createdAt: { type: Date, default: Date.now()},
});


const Artist = model("Artist", artistSchema);

exports.Artist = Artist