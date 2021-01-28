'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>CEO List Page</h1>`)
});

router.get('/:slug', (req, res) => {
    const { slug } = req.params; // DECONSTRUCTING
    console.log("Slug is: ", slug);
    res.send(`<h1>Single CEO Page</h1>`);
})

module.exports = router;