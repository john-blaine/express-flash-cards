const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/javascript', (req, res) => {
  res.send('<h2>I also love cornbread</h2>')
});

app.listen(1337, () => console.log('Listening on port 1337!'));
