const shopService = require('../../services/wechat/shop')
const shopCode = require('../../codes/shop')

module.exports = {

    /**
     *
     *  添加店铺信息
     * @param {*} ctx
     */
    async addShop ( ctx ) {
        if ( ctx.method === 'GET' ) {
            const title = '添加店铺信息'
            await ctx.render('shop_add', {
                title
            })
        }  else if ( ctx.method === 'POST' ) {
            let formdata = ctx.request.body
            let result = { success: false }

            let addResult = await shopService.addShop(formdata)
            if ( addResult ) {
                result.success = true
                result.code = 0
                result.message = '创建店铺成功'
            } else {
                result.code = -1
                result.message = '创建店铺失败'
            }

            ctx.body = result
        }
    },

    /**
     *
     *  查询店铺列表
     * @param {*} ctx
     */
    async getShopList ( ctx ) {

        let listResult = await shopService.getShopList()
        let result = { success: false }
        if ( listResult ) {
            result.success = true
            result.code = 0
            result.data = listResult
        } else {
            result.code = -1
            result.message = '查询店铺列表失败'
        }
        ctx.body = result
    },

    /**
     *
     *  查询店铺详情
     * @param {*} ctx
     */
    async getShopItem ( ctx ) {

        let id = ctx.params.id 
        let result = { success: false }
        let itemResult = await shopService.getShopItem( id )
        if ( itemResult ) {
            result.success = true
            result.code = 0
            result.data = itemResult
        } else {
            result.code = -1
            result.message = '查询数据失败'
        }
        ctx.body = result
    },

    /**
     *
     *  修改店铺信息
     * @param {*} ctx
     */
    async updateShop ( ctx ) {

        let id = ctx.params.id
        let result = { success: false }
        let updateResult = await shopService.updateShop( id )
        if (updateResult) {
            result.success = true
            result.code = 0
            result.message = '店铺信息修改成功'
        } else {
            result.code = -1
            result.message = '店铺信息修改失败'
        }
        ctx.body = result
    },

    /**
     *
     *  删除店铺信息
     * @param {*} ctx
     */
    async deleteShop ( ctx ) {
        
        let id = ctx.params.id
        let result = { success: false }
        let deleteResult = await shopService.deleteShop( id )
        if (deleteResult) {
            result.success = true
            result.code = 0
            result.message = '店铺信息修改成功'
        } else {
            result.code = -1
            result.message = '店铺信息修改失败'
        }
        ctx.body = result
    }

}