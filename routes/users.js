var router = require('koa-router')();

router.get('/', function (ctx, next) {
  console.log("aaaa")
  ctx.body = 'this a users response!';
});

module.exports = router;
