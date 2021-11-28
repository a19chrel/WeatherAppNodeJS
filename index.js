const express = require('express');
const app = express();
require('dotenv').config();
const https = require("https");
const fs = require("fs");
const cors = require("cors");

var certOptions;

/** Import routes */
const userRoute = require('./routes/users.js')
const forecastRoutes = require('./routes/forecast');
const commentsRoutes = require('./routes/comments');
const climateRoutes = require('./routes/climatecodes');
const ortRoutes = require('./routes/ort');

/** CORS OPTIONS */
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

/** Middlewares */
app.use(express.json());

/** Routes */
app.use('/users', userRoute);
app.use('/forecast', forecastRoutes);
app.use('/comments', commentsRoutes);
app.use('/climatecodes', climateRoutes);
app.use('/info', ortRoutes);

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