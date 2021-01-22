const router = require('express').Router();
const mongoose = require('mongoose');

const User = require('../models/User');
const Post = require('../models/Posts');
const requiredLogin = require('../middleware/requiredLogin')

router.post('/createpost', requiredLogin, (req, res) => {
    const { title, body } = req.body
    if (!title || !body) return res.status(422).json({ error: "All fields are required!" })
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        postedBy: req.user
    })
    post.save()
        .then(result => res.json({ post: result }))
        .catch(err => console.log(err))
})

module.exports = router;