const dbUtil = require('../../utils/db-util')

const comment = {

    /**
     *
     * 发布评论
     * @param {*} model
     * @returns
     */
    async insert( model ) {
        let result = await dbUtil.insertData( 'comment_db', model )
        return result
    },

    /**
     *
     * 获取评论列表
     * @returns
     */
    async getCommentsAll() {
        let _sql = 'SELECT * FROM comment_db'
        let result = await dbUtil.query(_sql, {})
        return result
    },

    /**
     *
     * 获取评论详情
     * @param {*} model
     * @returns
     */
    async getCommentById( model ) {
        let _sql = `SELECT * FROM comment_db WHERE comment_id = ${model.comment_id}`
        let result = await dbUtil.query(_sql)
        return result
    },

    /**
     *
     * 获取店铺商品评论信息
     * @param {*} model
     * @returns
     */
    async getCommentByShopId( model ) {
        let _sql = `SELECT * FROM comment_db WHERE shop_id = ${model.shop_id}`
        let result = await dbUtil.query(_sql)
        return result
    },

    /**
     *
     * 获取商品的评论信息
     * @param {*} model
     * @returns
     */
    async getCommentByProductId( model ) {
        let _sql = `SELECT * FROM comment_db WHERE product_id = ${model.product_id}`
        let result = await dbUtil.query(_sql)
        return result
    },

    /**
     *
     * 修改评论信息
     * @param {*} model
     * @returns
     */
    async update ( model ) {
        console.log('model', model)
        let _sql = "UPDATE comment_db SET ? WHERE comment_id = ?"
        let result = await dbUtil.query(_sql,[ model, model.comment_id ])
        return result
    },

    /**
     *
     * 删除评论信息
     * @param {*} model
     * @returns
     */
    async deleteComment ( model ) {
        let _sql = `DELETE FROM comment_db where comment_id = ${model.comment_id}`
        let result = await dbUtils.query(_sql, {})
        return result
    }
}

module.exports = comment