const dbUtil = require('../../utils/db-util')


const order = {

    /**
     *
     * 创建订单
     * @param {*} model
     * @returns
     */
    async create ( model ) {

        let result = await dbUtil.insertData( 'order_db', model )
        return result
    },

    /**
     *
     * 获取所有订单列表
     * @returns
     */
    async select () {
        let _sql = 'SELECT * FROM order_db'
        let result = await dbUtil.query(_sql, {})
        return result
    },

    /**
     *
     * 根据uid获取订单列表
     * @param {*} model
     * @returns
     */
    async getOrderListByUid ( model ) {

        let _sql = `SELECT * FROM order_db where uid = ${model.uid}`
        let result = await dbUtil.query(_sql, {})
        return result
    },

    /**
     *
     * 获取订单详情
     * @param {*} model
     * @returns
     */
    async getOrderById ( model ) {
        
        let _sql = `SELECT * FROM order_db where order_id = ${model.id}`
        let result = await dbUtil.query(_sql, {})
        return result
    },

    /**
     *
     * 更改订单状态
     * @param {*} model
     * @returns
     */
    async updateStatus ( model ) {
        let _sql = "UPDATE order_db SET status = ? WHERE order_id = ?"
        let result = await dbUtil.query(_sql,[ model.status, model.order_id ])
        return result
    }
}

module.exports = order