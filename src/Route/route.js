const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');
const Register = require('../models/register');
const jwt = require('jsonwebtoken');

//Authdata

const Authdata = async (req, res, next) => {
    try {
        const token = req.cookies.fit;
        const verifydata = jwt.verify(token, process.env.secretkey);
        const userdata = await Register.findOne({ _id: verifydata._id, "tokens.token": token });
        if (!userdata) {
            res.status(400).send('Not Authorized');
        }
        req.userdata = { Userid: userdata.Userid };
        next();

    } catch (err) {
        res.status(400).send('Not Authorized')
    }
}

router.post('/feedback', (req, res) => {
    res.status(200).redirect('/');
})

//Login and Logout activity

router.post('/register', async (req, res) => {
    try {
        userid = req.body.userid;
        email = req.body.email;
        password = req.body.password;
        cpassword = req.body.cpassword;

        if (userid == "" || email == "" || password == "" || userid.length<5
        || email.length>40 || password!=cpassword || password.length<8) {
            res.status(400).send('UnSuccessful');
        }

        const registerbodybuilder = new Register({

            Userid: userid,
            Emailid: email,
            Password: password

        })
        // Hashing of password using middle ware means in between two process

        const registered = await registerbodybuilder.save();

        res.status(200).send('successfully Registered');
    } catch (error) {
        res.status(400).send('UnSuccessful');
    }
})


router.post('/signin', async (req, res) => {
    try {
        const userid = req.body.userid;
        const password = req.body.password;

        if (userid == "" || password == "") {
            res.status(400).send('UnSuccessful');
        }

        const infouserid = await Register.findOne({ Userid: userid });
        const ismatch = await bcrypt.compare(password, infouserid.Password);

        const token = await infouserid.generateAuthToken();

        res.cookie('fit', token, {
            expires: new Date(Date.now() + 31536000),
            httpOnly: true
        });


        if (ismatch) {
            res.status(200).send('Successful');
        }
        else {
            res.status(400).send('UnSuccessful');
        }

    } catch (e) {
        res.status(400).send('UnSuccessful');
    }
})

router.get('/signout', async (req, res) => {
    try {
        const token = req.cookies.fit;
        const verifyuser = jwt.verify(token, process.env.secretkey);
        const user = await Register.findOne({ _id: verifyuser._id });
        res.clearCookie('fit', { path: '/' });

        user.tokens = user.tokens.filter((currentcookie) => {
            return currentcookie.token != token
        })

        await user.save();

        res.status(200).send('successful')
    } catch (e) {
        res.status(400).send('unsuccessful')
    }
})
 

router.get('/Auth', Authdata, (req, res) => {
    res.status(200).send(req.userdata);
})

module.exports = router;