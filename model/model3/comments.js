const mongoose = require('mongoose');
const {Schema} = mongoose;


const commentsSchema = new Schema({
   
   comments: {
        type: String,
        require: true
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    Posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Posts'
    }]
})

module.exports = mongoose.model('Comments', commentsSchema);