const middlewares = require('koa-middlewares');
const router = require('./router');
const http = require('http');
const Koa = require('koa');

const app = new Koa();

app.use(middlewares.favicon());

app.use(middlewares.bodyParser());

app.use(router.routes())
app.use(router.allowedMethods())

if (!module.parent) {
  app.listen(3000);
  console.log('$ open http://localhost:3000');
}

// app.listen(3000);
// console.log('listen at 3000')