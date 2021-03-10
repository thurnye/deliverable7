const mongoose = require('mongoose');
const {Schema} = mongoose;


const songSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    artist: {
        type: String,
        require: true
    },
    posts: [{
        type:Schema.Types.ObjectId,
        ref: 'Posts'
    }],
    comments : [{
        types: Schema.Types.ObjectId,
        ref: 'Comments'
    }],
})

module.exports = mongoose.model('Songs', songSchema);