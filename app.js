const express = require('express');
const app = express();
const https = require('https');
const port = 3000;

app.get('/', (req, res) => {
  let poolData; // declare variable to store parsed data
  // send get request to get pool data
  https.get('https://data.austintexas.gov/api/views/jfqh-bqzu/rows.json?accessType=DOWNLOAD', (res) => {
    let rawData = ''; // initialize empty string to store JSON data
    res.on('data', (packet) => {
      // process.stdout.write(packet);
      rawData += packet;  // add each JSON packet to rawData 
    }).on('end', (data) => {
      try {
        poolData = JSON.parse(rawData);
        console.log(poolData);
      } catch(err) {
        console.error(`Got error: ${err.message}`);
      }
    });
  }).on('error', (err) => {
    console.error(`Got error: ${err.message}`);
  });
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app is listening on port ${port}`));
