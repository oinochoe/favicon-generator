const express = require('express');
const favicon = require('express-favicon');

const app = express();

app.use(favicon(__dirname + '/input/favicon16.png'));

// Add your routes here, etc.

const server = app.listen(3111, function () {
    console.log('server is running at %s .', server.address().port);
});
