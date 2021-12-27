const router = require('express').Router();
const db = require('../dbconnect');

router.get('/', (req, res) => {
    const mongo = db.getDb();
    mongo.collection("climatecodes").find().toArray(function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(result);
        }
    });

});

module.exports = router;