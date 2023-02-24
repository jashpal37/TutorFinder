const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const Tutor = require('../models/TutorSchema');

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

router.post('/signin', async (req, res)=> {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(422).send({message: "Please enter data"});
    }
    try{
        const userExists = await User.find({ email: email});
        if(!userExists){
           return res.status(404).send({error: 'Please register first'});
        }
        if(userExists){
            if(password === userExists[0].password){
                return res.status(200).send({message: 'Login successful'});
            }else{
                return res.status(422).send({error: 'Invalid credentials'});
            }
        }
    }
    catch (err) {
        console.log(err);
    }

});


router.post('/addtutor', async (req,res) => {
    //const {tutorName, tutorEmail, tutorPhone, subjectName, subejectCode, subjectDescription} = req.body;
    // if (!tutorName || !tutorEmail || !tutorPhone || !subjectName || !subejectCode ||!subjectDescription) {
        
    //     return res.status(422).json({ error: "All fields are required" });
    // }

    const data=new Tutor({
        tutorName:req.body.tutorName,
        tutorEmail:req.body.tutorEmail,
        tutorPhone:req.body.tutorPhone,
        subjectName:req.body.subjectName,
        subjectCode:req.body.subjectCode,
        subjectDescription:req.body.subjectDescription

    });

    const val= await data.save();
    res.status(201).send({data: "Success!"});

});

module.exports = router;