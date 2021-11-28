const router = require('express').Router();


router.get('/:ort', (req, res) => {
    // Get forecasts for ort
    var data = [
        {
            "name": "Grums",
            "forecast": {
                "TUNIT": "celsius",
                "TVALUE": "20.6",
                "ALTUNIT": "fahrenheit",
                "ALTVALUE": "69.08",
                "NUMBER": "4",
                "WSYMB3NUMBER": "6",
                "FNAME": "Cloudy",
                "RUNIT": "mm",
                "RVALUE": "0",
                "DEG": "203",
                "CODE": "SSW",
                "NAME": "Light Air",
                "MPS": "0.6",
                "UNIT": "hPa",
                "VALUE": "1203"
            },
            "fromtime": "2020-06-09 00:00:00",
            "totime": "2020-06-09 06:00:00",
            "periodno": "0",
            "periodname": "Night"
        },
        {
            "name": "Grums",
            "forecast": {
                "TUNIT": "celsius",
                "TVALUE": "23.6",
                "ALTUNIT": "fahrenheit",
                "ALTVALUE": "74.48",
                "NUMBER": "9",
                "WSYMB3NUMBER": "11",
                "FNAME": "Thunder",
                "RUNIT": "mm",
                "RVALUE": "0.8",
                "DEG": "213",
                "CODE": "SSW",
                "NAME": "Calm",
                "MPS": "0.3",
                "UNIT": "hPa",
                "VALUE": "1156"
            },
            "fromtime": "2020-06-09 06:00:00",
            "totime": "2020-06-09 12:00:00",
            "periodno": "1",
            "periodname": "Morning"
        },
        {
            "name": "Grums",
            "forecast": {
                "TUNIT": "celsius",
                "TVALUE": "18.6",
                "ALTUNIT": "fahrenheit",
                "ALTVALUE": "65.48",
                "NUMBER": "5",
                "WSYMB3NUMBER": "7",
                "FNAME": "Fog",
                "RUNIT": "mm",
                "RVALUE": "0",
                "DEG": "210",
                "CODE": "S",
                "NAME": "Calm",
                "MPS": "0.1",
                "UNIT": "hPa",
                "VALUE": "1200"
            },
            "fromtime": "2020-06-09 12:00:00",
            "totime": "2020-06-09 18:00:00",
            "periodno": "2",
            "periodname": "Day"
        },
        {
            "name": "Grums",
            "forecast": {
                "TUNIT": "celsius",
                "TVALUE": "16.6",
                "ALTUNIT": "fahrenheit",
                "ALTVALUE": "61.88",
                "NUMBER": "6",
                "WSYMB3NUMBER": "8",
                "FNAME": "Rain Showers",
                "RUNIT": "mm",
                "RVALUE": "0",
                "DEG": "210",
                "CODE": "SSW",
                "NAME": "Light Breeze",
                "MPS": "3.2",
                "UNIT": "hPa",
                "VALUE": "1161"
            },
            "fromtime": "2020-06-09 18:00:00",
            "totime": "2020-06-09 00:00:00",
            "periodno": "3",
            "periodname": "Evening"
        }
    ];

    return res.json(data);
});

router.get('/:ort/:date', (req, res) => {
    // Get forecasts for ort and date
    return res.status(500).send("This service does not exists yet");
});

router.get('/:climatecode/:date', (req, res) => {
    // Get forecasts for a entered date and climatecode
    return res.status(500).send("This service does not exists yet");
});

module.exports = router;