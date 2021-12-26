const router = require('express').Router();
const db = require('../dbconnect')
router.get('/', (req, res) => {
    // Get users
    db.all(`select * from user`, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.json(row);
        }
    });
});

router.post('/', (req, res) => {
    // Create user
    db.run("insert into user(id, username, email) values(?, ?, ?)", [req.body.id, req.body.username, req.body.email], (err, rows)=>{
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.send(`User ${req.body.username} has been created!`);
        }
    });
});

router.get('/:user', (req, res) => {
    // Get user
    db.all(`select * from user where "username" = "${req.params.user}"`, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            return res.json(row);
        }
    });
});


module.exports = router;