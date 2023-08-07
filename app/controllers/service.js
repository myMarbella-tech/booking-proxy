const config = require('config');
const timer = require('../helpers/timer').default();

const { name, version, description } = config.app;

exports.about = async (ctx, next) => {
  ctx.body = (
    {
      name, version, description, env: process.env.NODE_ENV, uptime: String(timer()),
    }
  );

  return next();
};
