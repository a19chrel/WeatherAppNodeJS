const router = require('express').Router();


router.get('/:ort', (req, res) => {
    // Get ort
    return res.json({
        "name": "Grums",
        "type": "Administration centre",
        "country": "Sweden",
        "geodata": {
            "ALTITUDE": "55",
            "LATITUDE": "59.3466",
            "LONGITUDE": "13.10906",
            "GEOBASE": "geonames",
            "GEOBASEID": "2710343"
        },
        "about": "The dominating employer in Grums is the paper mill called Gruvöns Bruk which is the largest private employer in Värmland. There is also a lumber mill owned by Stora Enso.",
        "province": "Värmlands Län",
        "county": null,
        "municipality": "Värmland",
        "climatecode": "Dfb",
        "climate": "Consistently horrible weather combined with a thick frothy smell from the paper mill.",
        "charter": "Unknown",
        "postalcode": "664xx",
        "areacode": "(+46) 555"
    });
});


module.exports = router;