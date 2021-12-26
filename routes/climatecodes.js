const router = require('express').Router();
const db = require('../dbconnect');

router.get('/', (req, res) => {
    db.all(`select * from climatecodes`, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.json(row);
        }
    });
});

module.exports = router;