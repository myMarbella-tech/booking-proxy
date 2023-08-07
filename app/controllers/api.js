const {
  constants: {
    http: {
      OK_STATUS,
      BAD_REQUEST,
      INTERNAL_SERVER_ERROR,
    },
  },
} = require('config');

const manager = require('../managers/api');
const { qsBuilder } = require('../helpers/qsBuilder');

exports.propertyDetails = async (ctx, next) => {
  const { query } = ctx;
  const qs = qsBuilder(query);

  try {
    const res = await manager.propertyDetails(qs);
    const { transaction } = res;

    if (transaction?.status === 'error') {
      console.error('app/controllers/api.js ---> 23', { errors: transaction?.errordescription });
    }

    ctx.status = transaction?.status === 'success' ? OK_STATUS : BAD_REQUEST;
    ctx.body = res;
  } catch (error) {
    console.error('app/controllers/api.js ---> 29', error);
    ctx.status = INTERNAL_SERVER_ERROR;
    ctx.body = {
      error: error.message,
    };
  }

  return next();
};

exports.searchProperties = async (ctx, next) => {
  const { query } = ctx;
  const qs = qsBuilder(query);

  try {
    const res = await manager.searchProperties(qs);
    const { transaction } = res;

    if (transaction?.status === 'error') {
      console.error('app/controllers/api.js ---> 48', { errors: transaction?.errordescription });
    }

    ctx.status = transaction?.status === 'success' ? OK_STATUS : BAD_REQUEST;
    ctx.body = res;
  } catch (error) {
    console.error('app/controllers/api.js ---> 54', error);
    ctx.status = INTERNAL_SERVER_ERROR;
    ctx.body = {
      error: error.message,
    };
  }

  return next();
};
