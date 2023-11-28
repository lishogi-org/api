require('dotenv').config();

const headers = {
  Authorization: 'Bearer ' + process.env.lishogiToken,
};

fetch('https://lishogi.org/api/account', { headers })
  .then(res => res.json())
  .then(console.log);
