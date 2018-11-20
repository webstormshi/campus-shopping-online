/** 
 * 用户订单相关接口
*/

const router = require('koa-router')()
const orderController = require('../../controllers/wechat/order')

const routes = router
  .get('/create', orderController.createOrder)
  .post('/create', orderController.createOrder)   // 创建订单
  .get('/list/all', orderController.getOrderList)  // 获取所有订单列表
  .get('/list/:uid', orderController.getOrderListByUid)   // 根据uid获取订单列表
  .get('/detail/:id', orderController.getOrderById)       // 获取订单详情
  .post('/update/:id', orderController.updateOrderStatus)   //  更改订单状态

module.exports = routes