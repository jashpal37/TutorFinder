const express = require('express');
const router = express.Router();
const Register = require('../controller/Register');
const SignIn = require('../controller/SignIn');
const AddCourse = require('../controller/AddCourse');

router.post('/register', Register);

router.post('/signin', SignIn);

router.post('/addcourse/:id', AddCourse);

module.exports = router;