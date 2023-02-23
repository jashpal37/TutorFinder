const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
        required:true
    }
});

const Tutor = mongoose.model('Tutor', TutorSchema);
module.exports = Tutor;

