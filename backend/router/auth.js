const express = require('express');
const router = express.Router();
const Register = require('../controller/Register');
const SignIn = require('../controller/SignIn');
const AddCourse = require('../controller/AddCourse');
const GetAllCourse = require('../controller/GetAllCourse');
const AdminSignIn = require('../controller/AdminSignIn');

router.post('/register', Register);

router.post('/signin', SignIn);

router.post('/adminsignin', AdminSignIn);

router.post('/addcourse/:id', AddCourse);

router.get('/getallcourse', GetAllCourse);

module.exports = router;