const mongoose = require('mongoose');
const {Schema} = mongoose;


const fileSchema = new Schema({
    friendlyName: {
        type: Buffer,
        require: true
    },
})





const linkSchema = new Schema({
    friendlyName: {
        type: String,
        require: true
    },
    accesssUrl: {
        type: String,
        require: true
    },
    file: fileSchema
   
})

module.exports = mongoose.model('Links', linkSchema);