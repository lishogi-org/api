const fetch = require('node-fetch');

/* Create your personal token on https://lishogi.org/account/oauth/token */
const personalToken = '';

fetch('https://lishogi.org/api/account', {
    headers: {
      'Authorization': 'Bearer ' + personalToken
    }
  })
  .then(res => res.json())
  .then(console.log);
