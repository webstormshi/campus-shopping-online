const commentService = require('../../services/wechat/comment')
const commentCode = require('../../codes/comment')

module.exports = {

    /**
     *
     * 发布评论
     * @param {*} ctx
     */
    async publishComment ( ctx ) {
        if (ctx.method === 'GET') {
            await ctx.render('comment', {
                title: '发表用户评论'
            }) 
        } else if ( ctx.method === 'POST' ) {
            let result = { success: false }
            let formdata = ctx.request.body
            let pulishResult = await commentService.publishComment(formdata)
            if ( pulishResult ) {
                result.success = true
                result.code = 0
                result.message = '评论发表成功'
            } else {
                result.code = -1
                result.message = commentCode.ERROR_PUBLISH_COMMENT
            }
            ctx.body = result
        }
    },

    /**
     *
     * 获取评论列表
     * @param {*} ctx
     */
    async getCommentList ( ctx ) {
        let result = { success: false }
        let listResult = await commentService.getCommentList()
        if ( listResult ) {
            result.success = true
            result.code = 0
            result.data = listResult
        } else {
            result.code = -1
            result.message = commentCode.ERROR_QUERY_COMMENT_LIST
        }
        ctx.body = result
    },

     /**
     * 获取评论详情
     * @param {*} ctx
     */
    async getCommentDetail ( ctx ) {
        let result = { success: false }
        let id = ctx.params.id
        let detailResult = await commentService.getCommentDetail( id )
        if ( detailResult ) {
            result.success = true
            result.code = 0
            result.data = detailResult
        } else {
            result.code = -1
            result.message = commentCode.ERROR_QUERY_COMMENT_LIST
        }
        ctx.body = result
    },

     /**
     *
     * 获取店铺商品评论信息
     * @param {*} ctx
     */
    async getCommentByShopId ( ctx ) {
        let result = { success: false }
        let id = ctx.params.shop_id
        let listlResult = await commentService.getCommentByShopId( id )
        if ( listlResult ) {
            result.success = true
            result.code = 0
            result.data = listlResult
        } else {
            result.code = -1
            result.message = commentCode.ERROR_QUERY_COMMENT_LIST
        }
        ctx.body = result
    },

     /**
     *
     * 获取商品的评论信息
     * @param {*} ctx
     */
    async getCommentByProductId ( ctx ) {
        let result = { success: false }
        let id = ctx.params.product_id
        let listlResult = await commentService.getCommentByProductId( id )
        if ( listlResult ) {
            result.success = true
            result.code = 0
            result.data = listlResult
        } else {
            result.code = -1
            result.message = commentCode.ERROR_QUERY_COMMENT_LIST
        }
        ctx.body = result
    },

     /**
     *
     * 修改评论信息
     * @param {*} ctx
     */
    async updateComment ( ctx ) {
        let id = ctx.params.id
        let detailResult = await commentService.getCommentDetail( id )
        if ( ctx.method === 'GET' ) {
            await ctx.render('comment_update', {
                title: '修改评论信息',
                comment: detailResult[0]
            })
            return
        }
        let formdata = ctx.request.body
        formdata.comment_id = id
        let result = { success: false }
        let updateResult = await commentService.updateComment( formdata )
        if ( updateResult ) {
            result.success = true
            result.code = 0
            result.data = '评论修改成功'
        } else {
            result.code = -1
            result.message = commentCode.ERROR_UPDATE_COMMENT
        }
        ctx.body = result
    },

     /**
     *
     * 删除评论信息
     * @param {*} ctx
     */
    async deleteComment ( ctx ) {
        let result = { success: false }
        let id = ctx.params.id
        let listlResult = await commentService.deleteComment( id )
        if ( listlResult ) {
            result.success = true
            result.code = 0
            result.data = '评论删除成功'
        } else {
            result.code = -1
            result.message = commentCode.ERROR_DELETE_COMMENT
        }
        ctx.body = result
    }

}