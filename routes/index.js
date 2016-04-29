var router = require('koa-router')();

router.get('/', async (ctx, next) => {
  console.log("../")
  await ctx.render('index', {
    title:'Hello Koa'
  })
})
module.exports = router;
