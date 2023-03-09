const Admin = require('../models/AdminSchema');

const AdminSignIn = async (req, res) => {
    const admin = await Admin.findOne({email : req.body.email});
    if(admin.password === req.body.password){
        res.status(200).json("Successfully logged in");
    }else{
        console.log(admin);
        res.status(404).send("Invalid credentials");
    }
}

module.exports = AdminSignIn;