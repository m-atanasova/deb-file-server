const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname, 'public');

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/public/:fileName', (req, res) => {
    const fileName = req.params.fileName
    res.sendFile(path.join(public, fileName))
})

app.use(express.static('public'));
app.listen(8080, () => {
    console.log('App listening on port 8080');
})