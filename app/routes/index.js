const Router = require('koa-router');

const service = require('../controllers/service');
const api = require('../controllers/api');

const router = new Router();

router
  .get('/', service.about)
  .get('/propertyDetails', api.propertyDetails)
  .get('/searchProperties', api.searchProperties);

exports.default = router;
