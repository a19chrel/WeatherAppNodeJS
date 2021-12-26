const router = require('express').Router();
const db = require('../dbconnect');

router.get('/:ort', (req, res) => {
    // Get ort
    db.all(`select * from info where "name" = "${req.params.ort}"`, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.json(row);
        }
    });
});


module.exports = router;