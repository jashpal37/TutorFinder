const User = require('../models/UserSchema');

const GetAllTutors = async (req, res) => {
    try{
        const data = await User.find({isTutor: true});
        if(data){
            res.status(200).send(data);
        }else{
            res.status(404).send("Not Found");
        }
    }catch(err){
        console.log(err);
    }
};

module.exports = GetAllTutors;