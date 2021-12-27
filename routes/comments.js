const router = require('express').Router();
const db = require('../dbconnect')

router.get('/:ort', async (req, res) => {
    // Get comments from location - req.params.location
    const mongo = db.getDb();
    const collection = mongo.collection("comments");
    const comments = await collection.find({location: req.params.ort}).toArray();

    if (!comments) return res.status(500).send("There is no info for that location!");
    else return res.json(comments);
});

router.get('/:ort/comment/:commentid/', async (req, res) => {
    // Get an comment
    const mongo = db.getDb();
    const collection = mongo.collection("comments");
    const comment = await collection.findOne({location: req.params.ort, id: parseInt(req.params.commentid)});

    if (!comment) return res.status(500).send("That comment does not exists.");
    else return res.json(comment);
});

module.exports = router;