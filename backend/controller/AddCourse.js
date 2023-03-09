const Course = require('../models/CourseSchema');
const User = require('../models/UserSchema');
const nodemailer = require('nodemailer');

const AddCourse = async (req, res) => {
    const userData = await User.findOne({ _id: req.params.id });
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'dejuan.friesen42@ethereal.email',
            pass: 'C2B9raV8nbX99SmbSV'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Tutor Finder" <admin@tf.com>', // sender address
        to: userData.email, // list of receivers
        subject: "Hello From Tutor Finder", // Subject line
        text: "Feeling good?", // plain text body
        html: "<b>Feeling good?</b>", // html body
    });

    const { tutorName, tutorEmail, tutorPhone, subjectName, subjectCode, subjectDescription } = req.body;
    if (!tutorName || !tutorEmail || !tutorPhone || !subjectName || !subjectCode || !subjectDescription) {

        return res.status(422).json({ error: "All fields are required" });

    }
    try {
        const isVerified = false;
        const course = new Course({ tutorName, tutorEmail, tutorPhone, subjectName, subjectCode, subjectDescription, isVerified });
        await course.save();
        res.status(201).json({ message: "Course added" });

    } catch (err) {

        console.log(err);

    }
};

module.exports = AddCourse;