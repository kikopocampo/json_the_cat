const request = require('request');
const argv = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${argv}`,(error,response,body) => {
  if (error) {
    console.log(error);
    return;
  }
  const catInfo = JSON.parse(body);
  if (catInfo.length === 0) {
    console.log("BREED NOT FOUND");
    return;
  }
  console.log(catInfo[0].description);
});
