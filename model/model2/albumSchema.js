const mongoose = require('mongoose');
const {Schema} = mongoose;


const albumsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    song: {
        type: [Schema.Types.ObjectId],
        ref: 'Song'
    }, 
})

module.exports = mongoose.model('Album', albumsSchema);