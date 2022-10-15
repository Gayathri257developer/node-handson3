const express = require('express');
const port = 8080;

const app = express()

const middleware1 = (req, res, next) => {
  console.log("middleware1")
  next()
}

const middleware2 = (req, res, next) => {
  console.log("middleware2")
  next()
}

app.use(middleware1)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/login', middleware2, (req, res) => {
    res.write('<h1>Logged in<h1>')
})

app.get('/about', middleware2, (req, res) => {
    res.send('<h1>Prepbytes</h1>')
})

app.listen(port)