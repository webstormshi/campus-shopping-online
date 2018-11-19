/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
// const admin = require('./admin')
const work = require('./work')
const error = require('./error')

// wechat 模块
const product = require('./wechat/product')
const admin = require('./wechat/admin')
const shop = require('./wechat/shop')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
// router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/work', work.routes(), work.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())

// wechat 路由
router.use('/product', product.routes(), product.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/shop', shop.routes(), shop.allowedMethods())


module.exports = router


