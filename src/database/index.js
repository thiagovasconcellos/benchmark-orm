const { createConnection } = require('typeorm');

try {
  createConnection();
} catch (error) {
  console.error(error);
}
