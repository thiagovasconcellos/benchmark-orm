const faker = require('faker/locale/pt_BR');

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

module.exports = function createUser(amount) {
  const users = [];
  for (let index = 0; index < amount; index++) {
    const id = uuid();

    users.push({
      UserId: id,
      UserName: faker.name.firstName(),
      LastName: faker.name.lastName(),
      Email: faker.internet.email(),
      Avatar: faker.internet.avatar(),
      Address: {
        UserId: id,
        StreetName: faker.address.streetName(),
        City: faker.address.city(),
        County: faker.address.county(),
        AddressState: faker.address.state(),
        Country: faker.address.country(),
      },
      Finance: {
        UserId: id,
        Account: faker.finance.account(),
        AccountName: faker.finance.accountName(),
        Amount: faker.finance.amount(),
        CreditCardNumber: faker.finance.creditCardNumber(),
        CreditCardCVV: faker.finance.creditCardCVV(),
        BitcoinAddress: faker.finance.bitcoinAddress()
      }
    });

  }

  return users;
}