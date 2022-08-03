const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(8080, () => {
    console.log(`Servidor iniciado!`)
})

app.get('/', function (req, res) {
    res.send('hello world');
});