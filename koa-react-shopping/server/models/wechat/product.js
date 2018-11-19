const dbUtils = require('../../utils/db-util')

const product = {

    /**
     *
     * 插入商品信息
     * @param {*} model
     * @returns
     */
    async insert( model ) {
        let result = await dbUtils.insertData('product_db', model )
        return result
    },

    /**
     *
     * 获取商品信息列表
     * @returns
     */
    async getList () {
        let result = await dbUtils.select('product_db', '*')
        return result
    },

    /**
     *
     * 根据id获取管理员信息
     * @param {*} item
     * @returns
     */
    async getItem ( model ) {
        let _sql = `SELECT * FROM product_db where product_id = ${model.id}`
        let result = await dbUtils.query(_sql, {})
        return result
    },

     /**
     *
     * 根据id修改管理员信息
     * @param {*} model
     * @returns
     */
    async update ( model ) {
        let _sql = `UPDATE product_db SET ? WHERE product_id = ?`
        let result = await dbUtils.query(_sql, [ model, model.product_id ])
        return result
    },

    /**
     *
     * 根据id删除管理员信息
     * @param {*} item
     * @returns
     */
    async deleteItem ( model ) {
        let _sql = `DELETE FROM product_db where product_id = ${model.id}`
        let result = await dbUtils.query(_sql, {})
        return result
    }
}

module.exports = product