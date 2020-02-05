const express = require('express');
const app = express();
const https = require('https');
const port = 3000;

app.get('/', (req, res) => {
  https.get('https://raw.githubusercontent.com/devdattakulkarni/elements-of-web-programming/master/data/austin-pool-timings.xml', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
  });
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app is listening on port ${port}`));
