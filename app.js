const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('<h1>I love express</h1>');
})

app.get('/javascript', (req, res) => {
  res.send('<h2>I also love cornbread</h2>')
});

app.listen(1337, () => console.log('Listening on port 1337!'));
