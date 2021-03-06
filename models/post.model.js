const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: {type: String, required: true, max: 100},
    content: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('post', PostSchema);