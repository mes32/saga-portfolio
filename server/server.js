const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const projectRouter = require('./routes/project.route.js');
const tagRouter = require('./routes/tag.route.js');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/project', projectRouter);
app.use('/tag', tagRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});