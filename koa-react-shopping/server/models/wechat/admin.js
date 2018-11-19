 const dbUtil = require('../../utils/db-util')

 const admin = {

    /**
     * 
     * 注册商家账号
     * @param {*} model 
     */
    async create( model ) {
        let result = await dbUtil.insertData('admin_db', model)
        return result
    },

    /**
     * 
     *  通过用户名和密码查找用户
     * @param {*} model
     */
    async getAdminInfoByNameAndPwd ( model ) {
        let _sql = `SELECT * FROM admin_db where name = '${model.name}' and password = '${model.password}' limit 1`
        let result = await dbUtil.query(_sql, model)
        return result
    },

    /**
     * 
     *  通过邮箱和密码查找用户
     * @param {*} model
     */
    async getAdminInfoByEmailAndPwd ( model ) {
        let _sql = `SELECT * FROM admin_db where email = ${model.email} and password = ${model.password} limit 1`
        let result = await dbUtil.query(_sql, model)
        return result
    },

    /**
     * 
     * 获取管理员列表
     * @returns
     */
    async getAdminList() {
        let result = await dbUtil.select('admin_db', '*')
        return result
    },

    /**
     *
     * 根据id获取管理员信息
     * @param {*} model
     * @returns
     */
    async getAdminItem( model ) {
        var _sql = `SELECT * FROM admin_db where admin_id = ${model.id}`
        var result = await dbUtil.query(_sql, '*')
        return result
    },

    /**
     *
     * 根据id修改管理员信息
     * @param {*} model
     * @returns
     */
    async updateAdminInfo( model) {
        let _sql = `UPDATE admin_db SET ? WHERE admin_id = ?`
        let result = await dbUtil.query(_sql, [ model, model.admin_id ])
        return result
    },

    /**
     *
     * 删除管理员信息
     * @param {*} model
     * @returns
     */
    async deleteAdmin( model ) {
        let _sql = `DELETE FROM admin_db where admin_id = ${model.id}`
        let result = await dbUtil.query(_sql, {})
        return result
    }
 }

 module.exports = admin