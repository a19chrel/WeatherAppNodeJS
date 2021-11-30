Backend - NodeJS API
Ett egen backend i form av ett API (Application Programming Interface) skapades i NodeJS med hjälp av expressJS vilket är ett ramverk som tillåter uppbyggnad av en webbtjänst i NodeJS.

Flera rutter/routes skapades för att kunna hantera dem olika förfrågningarna som kan skickas till tjänsten. I denna deluppgiften när applikationen inte ännu är kopplad till en databas så användes enbart tre av rutterna. Dem olika kategorierna av endpoints skapades i olika filer för att öka strukturen över projektet.

[Länk](https://github.com/a19chrel/Avancerad-Webb-StartupCode/tree/Assigment3) till React Applikation.

Samtliga rutter i denna första backend applikation returnerar statisk test data för att visa på att api:et fungerar korrekt. Övriga endpoints skickar ett error meddelande om att det inte är fungerande ännu.

Lista över endpoints:
1. /forecast/:id
2. /forecast/:id
3. /comments/:id

```
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

    return res.json(data);
});
```
Programkod för endpoint: */comments/:ort*.

Applikationen använder sig av extra modul som heter HTTPS, denna används för servern som kör backend för vädertjänsten hostas på en webbserver som använder sig av en .dev domain och domänen kräver att applikationen körs över SSL protokollet som säkerhetsåtgärd. Implementation av detta sker med modulen HTTPS och fs som läser filerna för certifikatet, se figur X. Utöver detta så används dotenv vilket är ett paket som gör det möjligt att läsa in en typ av konfigurationsfil för filsökvägen för certifikat filerna.
```
require('dotenv').config();
const https = require("https");
const fs = require("fs");
...
/** Find and set certification files for HTTPS. */
if (fs.existsSync(process.env.CERT_PATH + "privkey.pem") && fs.existsSync(process.env.CERT_PATH + "cert.pem")) {
certOptions = {
key: fs.readFileSync(process.env.CERT_PATH + "privkey.pem"),
cert: fs.readFileSync(process.env.CERT_PATH + "cert.pem")
}
}

if (typeof certOptions !== 'undefined') {
https.createServer(certOptions, app).listen(3002, () => console.log('HTTPS server started! Listening on port 3002'));
} else {
app.listen(3000, () => console.log('[HTTP] Webserver is listening on port 3000'))
}
```
Programkod för klassen Forecast med API-anrop.

Med tanke på att applikationen hostas på en annan webbserver så finns det även problem med CORS (Cross Origin Resource Sharing) vilket blockerar förfrågningar från applikationen som hostas på en annan domän, för att lösa detta så används paketet cors som är en middleware som användas för att ändra inställningarna för cors, se kodexempel nedan.
```
...
const cors = require("cors");

...

/** CORS OPTIONS */
var corsOptions = {
origin: '*',
optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

...
```


Programkod för klassen Forecast med API-anrop.
