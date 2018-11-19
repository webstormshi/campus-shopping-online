/** 
 * 商品信息相关接口
*/

const router = require('koa-router')()
const productController = require('../../controllers/wechat/product')

const routers = router
    .get('/add', productController.addproduct)
    .post('/add', productController.addproduct)
    .get('/list', productController.productList)
    .get('/detail/:id', productController.productItem)
    .post('/delete/:id', productController.deleteProduct)
    .get('/edit/:id', productController.editProduct)
    .post('/edit/:id', productController.editProduct)


module.exports = routers