const router = require('express').Router();
const db = require('../dbconnect')

router.get('/:ort', (req, res) => {
    // Get comments from location - req.params.location
    db.all(`select * from comment where "location" = "${req.params.ort}"`, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.json(row);
        }
    });
});

router.get('/:ort/comment/:commentid/', (req, res) => {
    // Get an comment
    console.log(req.params.commentid);
    db.all(`select * from comment where "location" = "${req.params.ort}" AND "id" = "${req.params.commentid}"`, (err, row) => {
        console.log(`select * from comment where "location" = "${req.params.ort}" AND "id" = ${req.params.commentid}`);
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.json(row);
        }
    });
});

module.exports = router;