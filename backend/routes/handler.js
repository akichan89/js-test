const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Me",
        "msg": "This is my first tweet",
        "username": "akichan"
    }];
    res.end(JSON.stringify(str));
})

router.post('/addTweet', (req, res) => {
    res.end("NA");
});

module.exports = router;