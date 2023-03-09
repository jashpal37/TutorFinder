const Course = require('../models/CourseSchema');

const GetCourseForAdmin = async (req, res) => {
   try{
    const data = await Course.find();
    res.status(200).send(data);
   }catch(err){
    console.log(err);
   }
}

module.exports = GetCourseForAdmin