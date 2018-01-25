
var express = require('express');
var app = express();
var port = 5000 || process.env.PORT;
//serve static from the main build directory
app.use(express.static(__dirname + '/build/es6-unbundled'));

//render index.html on the main page, specify the root
app.get('/', (req, res) => {
    res.sendFile("index.html", {root: '.'});
})

app.listen(port, () => {
    console.log('Server app listening on port: ', port);
});


/*package.json'a scripts kısmına build ekledim, server çalıştırmak için "npm run build" */
