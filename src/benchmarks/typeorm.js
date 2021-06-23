const { createConnection, getRepository } = require('typeorm');
const User = require('../app/database/typeorm/entities/User');

const createFakeUser = require('../seeds/createUser');

module.exports = async function typeorm() {
  console.time('TypeORM Benchmark took:');
  console.time('Create connection took:');
  console.time('Create fake users took:');
  console.time('Persist fake users to db took:');
  const connection = await createConnection({
    type: "mssql",
    host: "192.168.99.100",
    username: "sa",
    port: 1433,
    password: "S{%UtP4th+D`*cE9",
    database: "NEWSPACE",
    entities: [
      User
    ]

  });
  console.timeEnd('Create connection took:');

  const numberOfUsers = Number(process.env.AMOUNT_USERS_FAKE_DATA);
  console.log(`Creating ${numberOfUsers} diferent users`);
  const fakeUsers = createFakeUser(numberOfUsers);
  console.timeEnd('Create fake users took:');

  const userRepository = connection.getRepository(User);

  console.log('Inserting users to MSSQL');

  for (const user of fakeUsers) {
    await userRepository.save(user);
  }
  console.timeEnd('Persist fake users to db took:');

  console.timeEnd('TypeORM Benchmark took:');
}