const router = require('express').Router();

router.get('/:ort', (req, res) => {
    // Get comments from location - req.params.location

    var data = [
        {
            "id": "1",
            "location": "Grums",
            "replyto": null,
            "author": "1",
            "content": "Vaknade upp av stanken från pappersbruket som vinden tryckte framför sig längs älven.",
            "posted": "2021-11-01 09:30",
            "username": "Greger Ohlsson",
            "email": "greger.olsson@net.nu",
            "favlocation": "Grums",
            "image": null,
            "user": "2",
            "comment": "1111",
            "commentid": "1111",
            "nolikes": "1"
        },
        {
            "id": "3",
            "location": "Grums",
            "replyto": "1111",
            "author": "3",
            "content": "På denna sidan av älven är det ännu värre.",
            "posted": "2021-11-01 09:33",
            "username": "Nisse Hult",
            "email": "nissehult@net.nu",
            "favlocation": "Grums",
            "image": null,
            "user": null,
            "comment": null,
            "commentid": "1112",
            "nolikes": "0"
        },
        {
            "id": "4",
            "location": "Grums",
            "replyto": "1112",
            "author": "4",
            "content": "Värmlänningar, vilka gnälliga typer.",
            "posted": "2021-11-01 10:04",
            "username": "Glenn Nilsson",
            "email": "glen@swnet.se",
            "favlocation": "Arjeplog",
            "image": null,
            "user": "2",
            "comment": "1113",
            "commentid": "1113",
            "nolikes": "1"
        },
        {
            "id": "3",
            "location": "Grums",
            "replyto": "1112",
            "author": "3",
            "content": "Det är så illa nu, så att snuset smakar kvavt.",
            "posted": "2021-11-03 10:07",
            "username": "Nisse Hult",
            "email": "nissehult@net.nu",
            "favlocation": "Grums",
            "image": null,
            "user": "1",
            "comment": "1114",
            "commentid": "1114",
            "nolikes": "3"
        },
        {
            "id": "4",
            "location": "Grums",
            "replyto": "1112",
            "author": "4",
            "content": "Här uppe i norr är det så kallt denna veckan så att snuset fryser i fickan och värmlänningarna klagar på odören från bruket. Veklingar.",
            "posted": "2021-12-07 11:24",
            "username": "Glenn Nilsson",
            "email": "glen@swnet.se",
            "favlocation": "Arjeplog",
            "image": null,
            "user": null,
            "comment": null,
            "commentid": "1115",
            "nolikes": "0"
        }
    ];

    return res.status(400).json(data);
});

router.post('/:ort', (req, res) => {
    // Create comments from location
    return res.status(500).send("This service does not exists yet");
});

router.get('/:ort/comment/:commentid/', (req, res) => {
    // Get an comment
    return res.status(500).send("This service does not exists yet");
});

router.post('/:ort/comment/:commentid/', (req, res) => {
    // Create an answer to an comment
    return res.status(500).send("This service does not exists yet");
});

router.put('/:ort/comment/:commentid/', (req, res) => {
    // Update an comment
    return res.status(500).send("This service does not exists yet");
});

module.exports = router;