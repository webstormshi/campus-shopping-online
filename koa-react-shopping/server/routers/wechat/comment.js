/** 
 * 用户评论相关接口
*/

const router = require('koa-router')()
const commentController = require('../../controllers/wechat/comment')

const routes = router
  .get('/publish', commentController.publishComment)    
  .post('/publish', commentController.publishComment)   // 发表评论
  .get('/list', commentController.getCommentList)       // 获取评论列表
  .get('/detail/:id', commentController.getCommentDetail)   // 获取评论详情
  .get('/shop/:shop_id', commentController.getCommentByShopId)   //  获取店铺商品评论信息
  .get('/product/:product_id', commentController.getCommentByProductId)  // 获取商品的评论信息
  .get('/update/:id', commentController.updateComment)    // 修改评论信息
  .post('/update/:id', commentController.updateComment)    // 修改评论信息
  .post('/delete/:id', commentController.deleteComment)     // 删除评论信息


module.exports = routes