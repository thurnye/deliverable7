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
    albumt: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }]
})

module.exports = mongoose.model('Songs', songSchema);