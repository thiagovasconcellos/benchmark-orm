const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Finance',
  tableName: 'Finances',
  columns: {
    FinanceId: {
      primary: true,
      type: 'int',
      generated: true,
    },
    UserId: {
      type: 'varchar',
    },
    Account: {
      type: 'varchar',
    },
    AccountName: {
      type: 'varchar',
    },
    Amount: {
      type: 'varchar',
    },
    CreditCardNumber: {
      type: 'varchar',
    },
    CreditCardCVV: {
      type: 'varchar',
    },
    BitcoinAddress: {
      type: 'varchar',
    },
  },
  relations: {
    user: {
      target: 'User',
      type: 'one-to-many',
      joinTable: true,
      cascade: true,
    },
  },
});
