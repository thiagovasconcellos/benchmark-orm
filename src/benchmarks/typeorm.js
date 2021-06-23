const { getRepository } = require('typeorm');
const ora = require('ora');

const User = require('../app/database/typeorm/entities/User');
const Address = require('../app/database/typeorm/entities/Address');
const Finance = require('../app/database/typeorm/entities/Finance');

const createFakeUser = require('../seeds/createUser');

const spinner = ora().start();

module.exports = async function typeorm() {
  const numberOfUsers = Number(process.env.AMOUNT_USERS_FAKE_DATA);

  numberOfUsers >= 1000
    ? console.log(`WTF?! ${numberOfUsers} unique users at once!!!`)
    : console.log(`Creating ${numberOfUsers}`);
  const fakeUsers = createFakeUser(numberOfUsers);

  const userRepository = getRepository(User);
  const addressRepository = getRepository(Address);
  const financeRepository = getRepository(Finance);

  spinner.text = 'Saving users to database...';
  spinner.color = 'blue';

  for (const user of fakeUsers) {
    await userRepository.save(user);
    await addressRepository.save(user.Address);
    await financeRepository.save(user.Finance);
  }

  spinner.succeed('Saved!');
  console.log('Wait till is done...');
};
