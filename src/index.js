require('dotenv/config');

const benchmarks = require('./benchmarks');

const args = process.argv.slice(2);
const acceptedBenchmarks = ['typeorm', 'sequelize'];

(async () => {
  if (args.length > 0) {
    args.forEach((value) => {
      if (acceptedBenchmarks.indexOf(value) !== -1) {
        return benchmarks[value]();
      }
      console.log('Invalid parameter. Use sequelize or typeorm');
    })
  } else {
    console.log('No parameter was provided. Use sequelize or typeorm');
  }
})();