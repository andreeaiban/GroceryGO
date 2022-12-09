var express = require('express');
var app = express();
const port = 8000;

app.use(express.static(__dirname + "/project2"));

app.use('/project2', express.static(__dirname + "/project2"));

app.listen(port, () => console.log(`listening on port ${port}!`));