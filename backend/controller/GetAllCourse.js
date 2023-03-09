const Course = require('../models/CourseSchema');
const GetAllCourse = async (req, res) => {
    try{
        const data = await Course.find({isVerified: true});
        if(data){
            res.status(200).send(data);
        }
        else{
            res.status(404).send({message: 'Course not found'});
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = GetAllCourse;