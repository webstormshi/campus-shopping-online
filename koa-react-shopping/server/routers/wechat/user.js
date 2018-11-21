/** 
 * 用户信息相关接口
*/

const router = require('koa-router')()
const userController = require('../../controllers/wechat/user')

const routes = router
  .get('/register', userController.signUp)      //  用户注册
  .post('/register', userController.signUp)     //  用户注册
  .get('/list', userController.getUserList)     // 获取所有用户列表 —— 管理员权限
  .get('/detail/:id', userController.getUserInfo)  // 获取用户信息
  .get('/wx/userInfo', userController.getWXInfo)   // 获取用户微信信息
  .get('/wx/phone', userController.getWXPhone)    //  获取用户微信电话
  .get('/update/:id', userController.updateInfo) //  修改用户信息
  .post('/update/:id', userController.updateInfo) //  修改用户信息    


module.exports = routes
  