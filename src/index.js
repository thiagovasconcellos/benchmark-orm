require('dotenv/config');

require('./database');

const ora = require('ora');

const benchmarks = require('./benchmarks');

const args = process.argv.slice(2);
const acceptedBenchmarks = ['typeorm', 'sequelize'];

const spinner = ora().start();

async function sleep(ms) {
  spinner.color = 'green';
  spinner.text = 'Waiting 7 seconds till connections are up and running...';
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  if (args.length > 0) {
    await sleep(7000);
    args.forEach((value) => {
      spinner.succeed('Ready!');
      if (acceptedBenchmarks.indexOf(value) !== -1) {
        return benchmarks[value]();
      }
      console.log('Invalid parameter. Use sequelize or typeorm');
    });
  } else {
    console.log('No parameter was provided. Use sequelize or typeorm');
  }
})();
