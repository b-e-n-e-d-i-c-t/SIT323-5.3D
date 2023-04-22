const axios = require('axios');

axios.get('http://microservice1:3000/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

