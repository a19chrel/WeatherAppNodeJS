const express = require('express');
const app = express();

/** Import routes */
const userRoute = require('./routes/users.js')
const forecastRoutes = require('./routes/forecast');
const commentsRoutes = require('./routes/comments');
const climateRoutes = require('./routes/climatecodes');

/** Middlewares */
app.use(express.json());

/** Routes */
app.use('/users', userRoute);
app.use('/forecast', forecastRoutes);
app.use('/comments', commentsRoutes);
app.use('/climatecodes', climateRoutes);

app.listen(3000, () => console.log('Webserver is listening on port 3000'))