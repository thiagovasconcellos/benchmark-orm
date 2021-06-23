const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Address',
  tableName: 'Addresses',
  columns: {
    AddressId: {
      primary: true,
      type: 'int',
      generated: true,
    },
    UserId: {
      type: 'varchar',
    },
    StreetName: {
      type: 'varchar',
    },
    City: {
      type: 'varchar',
    },
    County: {
      type: 'varchar',
    },
    AddressState: {
      type: 'varchar',
    },
    Country: {
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
