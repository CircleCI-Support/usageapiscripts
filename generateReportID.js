const request = require('request');

const options = {
  method: 'POST',
  url: 'https://circleci.com/api/v2/organizations/{INSERT-ORG-ID}/usage_export_job',
  headers: {'content-type': 'application/json', 'Circle-Token': '{INSERT-API-TOKEN}'},
  body: {
    start: '2024-07-23T08:48:17Z', //change reporting window here as needed
    end: '2024-08-23T00:48:17Z'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});