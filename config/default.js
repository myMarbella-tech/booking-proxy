const dotenv = require('dotenv');
const pkg = require('../package.json');

dotenv.config();

module.exports = {
  app: {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  },
  server: {
    port: process.env.PORT,
  },
  rest: {
    protocol: process.env.API_PROTOCOL,
    hostname: process.env.API_HOSTNAME,
  },
  constants: {
    http: {
      OK_STATUS: 200,
      BAD_REQUEST:400,
      INTERNAL_SERVER_ERROR:500,
    }
  },
};
