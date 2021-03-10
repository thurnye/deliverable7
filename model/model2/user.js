const mongoose = require('mongoose');
const {Schema} = mongoose;


const usersSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
  
    Playlist: {
        type: [Schema.Types.ObjectId],
        ref: 'Playlist'
    },
    
})

module.exports = mongoose.model('User', usersSchema);