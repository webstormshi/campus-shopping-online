const dbUtils = require('../../utils/db-util')

const product = {

    async insert( model ) {
        let result = await dbUtils.insertData('product_db', model )
        return result
    },

    async getList () {
        let result = await dbUtils.select('product_db', '*')
        return result
    },

    async getItem ( item ) {
        let _sql = `SELECT * FROM product_db where product_id = ${item.id}`
        let result = await dbUtils.query(_sql, {})
        return result
    },

    async deleteItem ( item ) {
        let _sql = `DELETE FROM product_db where product_id = ${item.id}`
        let result = await dbUtils.query(_sql, {})
        return result
    },
    
    async update ( data ) {
        let _sql = `UPDATE product_db SET ${data} WHERE product_id = ${data.product_id}`
        let result = await dbUtils.query(_sql, {})
        return result
    }
}

module.exports = product