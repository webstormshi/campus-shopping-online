/** 
 * 管理员相关接口
*/

const router = require('koa-router')()
const adminController = require('../../controllers/wechat/admin')

const routers = router
    .get('/register', adminController.signUp)
    .post('/register', adminController.signUp)
    .get('/login', adminController.signIn)
    .post('/login', adminController.signIn)
    .get('/detail/:id', adminController.adminInfo)
    .get('/list', adminController.getList)
    .get('/edit/:id', adminController.updateAdminInfo )
    .post('/edit/:id', adminController.updateAdminInfo)
    .post('/delete/:id', adminController.deleteAdmin)

module.exports = routers
    
