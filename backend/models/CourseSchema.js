const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    tutorName: {
        type: String,
        required: true
    },
    tutorEmail: {
        type: String,
        required: true
        
    },
    tutorPhone: {
        type: Number,
        required: true
        
    },
    subjectName: {
        type: String,
        required: true
        
    },
    subjectCode: {
        type: String,
        required: true
    },
    subjectDescription: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

