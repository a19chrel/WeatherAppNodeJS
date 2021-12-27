const router = require('express').Router();
const db = require('../dbconnect');

router.get('/:ort', async (req, res) => {
    // Get forecasts for ort
    const mongo = db.getDb();
    const collection = mongo.collection("forecasts");
    const forecasts = await collection.find({name: req.params.ort}).toArray();

    if (!forecasts) return res.status(500).send("There is no forecasts for that location!");
    else return res.json(forecasts);

});

router.get('/:ort/:date', async (req, res) => {
    // Get forecasts for ort and date
    const mongo = db.getDb();
    const collection = mongo.collection("forecasts");
    const forecasts = await collection.find({name: req.params.ort, fromtime: new RegExp(req.params.date) }).toArray();

    if (!forecasts) return res.status(500).send("There is no forecasts for that location!");
    else return res.json(forecasts);

});

module.exports = router;