const dbUtil = require('../../utils/db-util')

const shop = {

    /**
     *
     * 添加店铺
     * @param {*} model
     * @returns
     */
    async create ( model ) {
        let result = await dbUtil.insertData( 'shop_db', model )
        return result
    },

    /**
     *
     * 获取店铺列表
     * @returns
     */
    async getShopList () {
        let result = await dbUtil.select('shop_db', '*')
        return result
    },

    /**
     *
     * 获取店欧详情
     * @param {*} model
     * @returns
     */
    async getShopItem ( model ) {
        let _sql = `SELECT * FROM shop_db where shop_id = ${model.id}`
        let result = await dbUtil.query(_sql, {})
        return result
    },

    /**
     *
     * 修改店铺信息
     * @param {*} model
     * @returns
     */
    async updateShop ( model ) {
        let _sql = 'UPDATE shop_db SET ? WHERE shop_id_id = ?'
        let result = dbUtil.query(_sql, [ model, model.shop_id ])
        return result
    },

    /**
     *
     * 删除店铺
     * @param {*} model
     * @returns
     */
    async deleteShop ( model ) {
        let _sql = 'DELETE FROM shop_db where shop_id = ?'
        let result = await dbUtil.query(_sql, [ model.id ])
        return result
    }
}

module.exports = shop
