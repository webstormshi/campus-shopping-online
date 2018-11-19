/** 
 * 店铺信息相关接口
*/

const router = require('koa-router')()
const shopController = require('../../controllers/wechat/shop')

const routes = router
  .get('/add', shopController.addShop)
  .post('/add', shopController.addShop)
  .get('/list', shopController.getShopList)
  .get('/detail/:id', shopController.getShopItem)
  .post('/update/:id', shopController.updateShop)
  .post('/delete/:id', shopController.deleteShop)

module.exports = routes