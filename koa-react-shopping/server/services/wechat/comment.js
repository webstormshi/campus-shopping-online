/** 
 * 评论业务操作
*/

let commentModel = require('../../models/wechat/comment')
let commentCode = require('../../codes/comment')
let datetime = require('../../utils/datetime')

const comment = {

    /**
     *
     * 发布评论
     * @param {*} comment
     */
    async publishComment( comment ) {
        let time = datetime.getNowDatetime()
        let result = await commentModel.insert({
            shop_id: comment.shop_id,
            product_id: comment.product_id,
            uid: comment.uid,
            content: comment.content,
            publish_time: time,
            addition: comment.addition
        })
        return result
    },

    /**
     *
     * 获取评论列表
     * @returns
     */
    async getCommentList() {
        let result = await commentModel.getCommentsAll()
        return result
    },

    /**
     *
     * 获取评论详情
     * @param {*} id
     * @returns
     */
    async getCommentDetail( id ) {
        let result = await commentModel.getCommentById({comment_id: id})
        return result
    },

    /**
     *
     * 获取店铺商品评论信息
     * @returns
     */
    async getCommentByShopId() {
        let result = await commentModel.getCommentByShopId({shop_id: id})
        return result
    },

    /**
     *
     * 获取商品的评论信息
     * @returns
     */
    async getCommentByProductId() {
        let result = await commentModel.getCommentByProductId({product_id: id})
        return result
    },

    /**
     *
     * 修改评论信息
     * @param {*} comment
     * @returns
     */
    async updateComment( comment ) {
        let result = await commentModel.update({
            comment_id: comment.comment_id,
            shop_id: comment.shop_id,
            product_id: comment.product_id,
            uid: comment.uid,
            content: comment.content,
            publish_time: time,
            addition: comment.addition
        })
        return result
    },

    /**
     *
     * 删除评论信息
     * @returns
     */
    async deleteComment() {
        let result = await commentModel.delete({comment_id: id})
        return result
    }
}

module.exports = comment