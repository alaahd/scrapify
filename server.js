const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/html', (req, res) => {
  res.status(200).send('This request is pointing to server static HTML files');
});

app.listen(port, () => {
  console.log(`Starting node server on port ${port}`);
});
