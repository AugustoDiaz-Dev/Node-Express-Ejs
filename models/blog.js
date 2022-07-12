const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// The Schema defines the structure of our documents
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// The model surrounds the Schema and provides an interface by which to communicate with a DB collection for that document type. 
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;