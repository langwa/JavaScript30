var express = require('express'),
    app = express(),
    dir = process.argv[2].toString(),
    port = process.env.PORT || 3000;

if (!dir) {
    console.log('No directory specified\n(Usage: node index.js <directory>)');
    return;
}

console.log('Serving from directory: ' + dir);

app.use(express.static(dir));

app.listen(port, function() {
    console.log('Listening on port ' + port);
});