var koa = require('koa')
var app = new koa()


app.use(ctx => {
    console.log('request is recived and resolving...')
    ctx.body = 'hello world'
})

console.log('3000 port is listening...')
app.listen(3000)