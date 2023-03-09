const User = require('../models/UserSchema');

const SignIn = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(422).json({message: "Please enter data"});
    }
    try{
        const userExists = await User.findOne({ email: email});
        if(!userExists){
           return res.status(404).send({error: 'Please register first'});
        }
        if(userExists){
            if(password === userExists.password){
                //console.log(userExists);
                return res.status(200).json({data: userExists});
            }else{
                return res.status(422).send({error: 'Invalid credentials'});
            }
        }
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = SignIn;