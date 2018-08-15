import express from 'express';
import path from 'path';
let app = express()

app.use(express.static(`${__dirname}/dist`))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
