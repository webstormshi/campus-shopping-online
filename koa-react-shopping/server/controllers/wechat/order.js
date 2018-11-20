const orderService = require('../../services/wechat/order')
const orderCode = require('../../codes/order')

module.exports = {

    /**
     * 创建订单
     * @param {*} ctx 
     */
    async createOrder ( ctx ) {
        if ( ctx.method === 'GET' ) {
            await ctx.render('createOrder', {
                title: '创建用户订单'
            })
        } 
        
        else if ( ctx.method === 'POST' ) {
            let result = { success: false }
            let formdata = ctx.request.body

            let createResult = await orderService.createOrder( formdata )
            if ( createResult ) {
                result.success = true
                result.code = 0
                result.message = '用户订单创建成功'
            } else {
                result.code = -1
                result.message = '用户订单创建失败'
            }

            ctx.body = result
        }
    },

    /**
     * 获取所有订单列表
     * @param {*} ctx 
     */
    async getOrderList ( ctx ) {
        
        let result = { success: false }
        let listResult = await orderService.getOrderList()
        
        if ( listResult ) {
            result.success = true
            result.code = 0
            result.data = listResult
        } else {
            result.code = -1
            result.message = '用户订单查询失败'
        }

        ctx.body = result
    },

    /**
     * 根据uid获取订单列表
     * @param {*} ctx 
     */
    async getOrderListByUid ( ctx ) {
        
        let uid = ctx.params.uid
        let result = { success: false }
        let listResult = await orderService.getOrderListByUid( uid )
        
        if ( listResult ) {
            result.success = true
            result.code = 0
            result.data = listResult
        } else {
            result.code = -1
            result.message = '用户订单查询失败'
        }

        ctx.body = result
    },

    /**
     * 获取订单详情
     * @param {*} ctx 
     */
    async getOrderById ( ctx ) {
        
        let id = ctx.params.id
        let result = { success: false }
        let detailResult = await orderService.getOrderById( id )
        
        if ( detailResult ) {
            result.success = true
            result.code = 0
            result.data = detailResult
        } else {
            result.code = -1
            result.message = '用户订单查询失败'
        }
        ctx.body = result
    },

    /**
     * 更改订单状态
     * @param {*} ctx 
     */
    async updateOrderStatus ( ctx ) {

        let id = ctx.params.id
        let formdata = ctx.request.body
        formdata.id = id
        let result = { success: false }
        let detailResult = await orderService.updateOrderStatus( formdata )
        
        if ( detailResult ) {
            result.success = true
            result.code = 0
            result.data = '修改订单状态成功'
        } else {
            result.code = -1
            result.message = '修改订单状态失败'
        }
        ctx.body = result
    }
}