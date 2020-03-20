const APP_ID = 'cd902cae-3633-4eeb-9ece-98086200be99';
const APP_SECERET = 'u5z.9E1Uh1l/@:sYacgJ5B5xInV?CpLK';
const TOKEN_ENDPOINT ='https://login.microsoftonline.com/common/oauth2/v2.0/token';
const MS_GRAPH_SCOPE = 'https://graph.microsoft.com/.default';

const axios = require('axios');
const qs = require('qs');

const postData = {
  client_id: APP_ID,
  scope: MS_GRAPH_SCOPE,
  client_secret: APP_SECERET,
  grant_type: 'client_credentials'
};

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

let token = '';

axios
  .post(TOKEN_ENDPOINT, qs.stringify(postData))
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });