const request = require('request');

const options = {
  method: 'GET',
  url: 'https://circleci.com/api/v2/organizations/{INSERT-ORG-ID}/usage_export_job/{INSERT-GENERATED-ID-FROM-FIRST-SCRIPT}',
  headers: {'Circle-Token': '{INSERT-API-TOKEN}'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});