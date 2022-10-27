const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response,body) => {
    if (error) {
      return callback(error, null);
    }
    const catInfo = JSON.parse(body);
    if (catInfo.length === 0) {
      return callback(null, "BREED NOT FOUND");
    }
    callback(null, catInfo[0].description);
  });
};

module.exports = {fetchBreedDescription};