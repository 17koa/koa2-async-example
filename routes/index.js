var router = require('koa-router')();

router.get('/',  (ctx, next) => {
  console.log("../")
  return ctx.render('index', {
    title:'Hello Koa'
  })
})
module.exports = router;
