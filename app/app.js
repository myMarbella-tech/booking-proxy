const http = require('http');
const Koa = require('koa');
const config = require('config');
const cors = require('koa2-cors');
const router = require('./routes/index').default;

const app = new Koa();

app.use(router.routes());
app.use(cors());

const server = http.createServer(app.callback())
  .listen(config.server.port, () => {
    // eslint-disable-next-line no-console
    console.table({
      Application: config.app.name,
      Version: config.app.version,
      Port: config.server.port,
    });
  });

module.exports = {
  server,
  closeServer() {
    server.close();
  },
};
