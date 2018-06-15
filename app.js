const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('I love express');
})

app.listen(1337, () => console.log('Listening on port 1337!'));
