'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>Root route!</h1>`)
});

module.exports = router;