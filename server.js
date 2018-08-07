const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', express.static(path.join(__dirname, 'www/html')));

app.listen(port, () => {
  console.log(`Starting node server on port ${port}`);
  console.log(`http://localhost:${port}`);
});
