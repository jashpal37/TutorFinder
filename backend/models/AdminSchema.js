const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;