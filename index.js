const {fetchBreedDescription} = require('./breedFetcher');
const argv = process.argv.slice(2);

fetchBreedDescription(argv, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
    return;
  }
  console.log(desc);
});