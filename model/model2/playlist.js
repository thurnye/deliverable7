const mongoose = require('mongoose');
const {Schema} = mongoose;


const playlistsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    song: {
        type: String,
        require: true
    },
  
    song: {
        type: [Schema.Types.ObjectId],
        ref: 'Song'
    },
    
})

module.exports = mongoose.model('Playlist', playlistsSchema);