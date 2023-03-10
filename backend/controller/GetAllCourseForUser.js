const Course = require('../models/CourseSchema');

const GetAllCourseForUser = async (req, res) => {
    const data = await Course.find({email: req.body.email});
    console.log(data);
    res.status(200).send(data);
}

module.exports = GetAllCourseForUser;