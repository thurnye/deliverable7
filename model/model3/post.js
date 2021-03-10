const mongoose = require('mongoose');
const {Schema} = mongoose;


const postsSchema = new Schema({
   
   post: {
        type: String,
        require: true
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
})

module.exports = mongoose.model('Posts', postSchema);