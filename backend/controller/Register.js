const User = require('../models/UserSchema');

const Register = async (req, res) => {
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
            const isTutor = false;
            const user = new User({ name, email, phone, password, cpassword, isTutor });
            await user.save();

            res.status(201).json({ message: "User saved successfully" });
        }

    } catch (err) {

        console.log(err);

    }
};

module.exports = Register;