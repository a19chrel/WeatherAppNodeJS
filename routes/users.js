const router = require('express').Router();
const db = require('../dbconnect')
router.get('/', (req, res) => {
    // Get users
    const mongo = db.getDb();
    mongo.collection("users").find().toArray(function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(result);
        }
    });
});

router.post('/', async (req, res) => {
    // Create user
    const mongo = db.getDb();
    const collection = mongo.collection("users");

    const idExists = await collection.findOne({id: req.body.id});
    if (idExists) return res.status(500).send("There is already an user with that id.");

    const usernameExists = await collection.findOne({username: req.body.username});
    if (usernameExists) return res.status(500).send("There is already an user with that username.");

    const emailExists = await collection.findOne({email: req.body.email});
    if (emailExists) return res.status(500).send("There is already an user with that email.");

    const user = await collection.insertOne({
        id: req.body.id,
        username: req.body.username,
        email: req.body.email
    });

    if (!user) return res.status(500).send("That user could not be added.");
    else return res.json(user);
});

router.get('/:user', async (req, res) => {
    // Get user
    const mongo = db.getDb();
    const collection = mongo.collection("users");
    const user = await collection.findOne({username: req.params.user});

    if (!user) return res.status(500).send("That user does not exists");
    else return res.json(user);
});


module.exports = router;