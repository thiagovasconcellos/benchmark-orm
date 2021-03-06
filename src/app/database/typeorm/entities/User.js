const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'User',
  tableName: 'Users',
  columns: {
    UserId: {
      primary: true,
      type: 'varchar',
      generated: false,
    },
    UserName: {
      type: 'varchar',
    },
    LastName: {
      type: 'varchar',
    },
    Email: {
      type: 'varchar',
    },
    Avatar: {
      type: 'varchar',
    },
  },
});
