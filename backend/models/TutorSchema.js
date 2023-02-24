const mongoose = require('mongoose');

const tutorschema = new mongoose.Schema({

    tutorName: {
        type: String,
        
    },
    tutorEmail: {
        type: String,
        
    },
    tutorPhone: {
        type: Number,
        
    },
    subjectName: {
        type: String,
        
    },
    subjectCode: {
        type: String,
        
    },
    subjectDescription: {
        type: String,
        
    }
});

const Tutor = mongoose.model('Tutor', tutorschema);
module.exports = Tutor;

