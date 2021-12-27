const router = require('express').Router();
const db = require('../dbconnect');

router.get('/:ort', async (req, res) => {
    // Get ort
    const mongo = db.getDb();
    const collection = mongo.collection("info");
    const info = await collection.findOne({name: req.params.ort});

    if (!info) return res.status(500).send("There is no info for that location!");
    else return res.json(info);
});


module.exports = router;