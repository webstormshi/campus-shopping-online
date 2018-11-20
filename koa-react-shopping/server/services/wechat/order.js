/** 
 * 订单业务操作
*/

const orderModel = require('../../models/wechat/order')
const orderCode = require('../../codes/order')
const datetime = require('../../utils/datetime')

const order = {

    /**
     *
     * 创建订单
     * @param {*} order
     */
    async createOrder ( order ) {
        let time = datetime.getNowDatetime()
        let randomStr = Math.random().toString(10).substr(2)
        let orderno = datetime.parseStampToFormat( null, 'YYYYMMDDhhmmss' ) + randomStr.substr( randomStr.length-4 )

        let result = await orderModel.create({
            shop_id: order.shop_id,
            order_no: orderno,
            uid: order.uid,
            name: order.name,
            mobile: order.mobile,
            price: order.price,
            discount: order.discount,
            address: order.address,
            addition: order.addition,
            order_time: time
        })
        return result
    },

    /**
     *
     * 获取所有订单列表
     * @returns
     */
    async getOrderList () {
        
        let result = await orderModel.select()
        return result
    },

    /**
     *
     * 根据uid获取订单列表
     * @param {*} uid
     * @returns
     */
    async getOrderListByUid ( uid ) {

        let result = await orderModel.getOrderListByUid ({ uid: uid})
        return result
    },

    /**
     *
     * 获取订单详情
     * @param {*} id
     * @returns
     */
    async getOrderById ( id ) {

        let result = await orderModel.getOrderById ({id: id})
        return result
    },

    /**
     *
     * 更改订单状态
     * @param {*} order
     * @returns
     */
    async updateOrderStatus ( order ) {
        
        let result = await orderModel.updateStatus({
            order_id: order.id,
            status: order.status
        })
        return result
    }

}

module.exports = order