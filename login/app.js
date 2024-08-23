const express = require('express')
const app = express()
const path = require('path')
const mysql = require('mysql2');

app.set('view engine', ejs)
app.set('view', path.join(__dirname, 'views'));
app.use('images')

const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))