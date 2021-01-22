const router = require('express').Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('Welcome')
})

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) return res.status(422).json({ error: 'All fields are required!' })
    User.findOne({ email: email })
        .then(savedUser => {
            if (savedUser) return res.status(422).json({ error: 'User with that email already exists' })
            bcrypt.hash(password, 15)
                .then(hashed => {
                    const user = new User({
                        email,
                        password: hashed,
                        name
                    });
                    user.save()
                        .then(user => res.status(201).json({ message: 'User account created successfully' }))
                        .catch(err => console.log(err))
                })

        })
        .catch(err => console.log(err))

})

module.exports = router;