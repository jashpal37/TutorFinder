const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const Tutor = require('../models/TutorSchema');

router.post('/addtutor', async (req,res) => {
    const {tutorName, tutorEmail, tutorPhone, subjectName, subejectCode, subjectDescription} = req.body;


});

router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        
        return res.status(422).json({ error: "All fields are required" });

    }
    try {

        const userExists = await User.findOne({ email: email });

        if (userExists) {

            return res.status(422).json({ error: "Email already exists" });

        } else if (password != cpassword) {
            
            return res.status(422).json({ error: "Passwords do not match" });

        } else {
            const user = new User({ name, email, phone, password, cpassword });
            await user.save();

            res.status(201).json({ message: "User saved successfully" });
        }

    } catch (err) {

        console.log(err);

    }
});

module.exports = router;