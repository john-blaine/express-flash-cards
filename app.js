const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's Tomb?" })
});

app.listen(1337, () => console.log('Listening on port 1337!'));
