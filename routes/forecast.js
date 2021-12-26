const router = require('express').Router();
const db = require('../dbconnect');

router.get('/:ort', (req, res) => {
    // Get forecasts for ort
    db.all(`select * from forecast where "name" = "${req.params.ort}"`, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.json(row);
        }
    });
});

router.get('/:ort/:date', (req, res) => {
    // Get forecasts for ort and date
    db.all(`select * from forecast where "name" = "${req.params.ort}" AND fromtime LIKE "${req.params.date}%"`, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.json(row);
        }
    });
});

module.exports = router;