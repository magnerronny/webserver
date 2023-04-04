const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config();
const port = process.env.PORT ;
//Middlewares

app.use(express.static('public'))

// config handlewares
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'rommy',
    titulo: ' page hbs'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'rommy',
    titulo: ' generic'
  })
})

app.get('/elements', (req, res) => {
  // res.sendFile(__dirname + '/public/elements.html')
  res.render('elements',{
    nombre: 'rommy',
    titulo: 'elements'
  })
})



app.listen(port, () => {
  console.log(`Server listening in port ${port}`);
})