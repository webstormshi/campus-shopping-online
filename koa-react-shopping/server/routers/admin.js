/**
 * 管理员用户子路由
 */

const router = require('koa-router')()
const admin = require('./../controllers/admin')

const routes = router
  .get('/login', admin.loginPage)
  .get('/register', admin.registerPage)

module.exports = routes