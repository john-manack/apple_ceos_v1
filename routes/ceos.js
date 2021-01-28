'use strict';

const express = require('express'),
    router = express.Router();

const ceosModel = require('../db')

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: "List of Apple CEOs",
            data: ceosModel,
        },
        partials: {
            body: 'partials/ceo-list',
        }
    });
});

router.get('/:slug', (req, res) => {
    const { slug } = req.params; // DECONSTRUCTING
    console.log("Slug is: ", slug);
    res.render('template', {
        locals: {
            title: 'An Apple CEO',
        },
        partials: {
            body: 'partials/ceo-details',
        }
    })
})

module.exports = router;