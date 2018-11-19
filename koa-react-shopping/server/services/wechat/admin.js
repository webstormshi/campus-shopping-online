/** 
 * 管理员业务操作
*/

var validator = require('validator')
var adminModel = require('../../models/wechat/admin')
var adminCode = require('../../codes/admin')
var datetime = require('../../utils/datetime')

const admin = {
    
    /**
     * 管理员注册
     * @param {object} admin 
     */
    async signUp ( admin ) {
        var time = datetime.getNowDatetime()
        let result = await adminModel.create({
            realname: admin.realname,
            name: admin.name,
            password: admin.password,
            role: admin.role,
            register_time: time,
            email: admin.email,
            mobile: admin.mobile
        })
        return result
    },

    /**
     *
     * 管理员登录
     * @param {*} admin
     * @returns
     */
    async signIn ( admin ) {
        let result = {}
        
        // 用户名+密码 登录
        if (admin.name && admin.password) {
            result = await adminModel.getAdminInfoByNameAndPwd({
                name: admin.name,
                password: admin.password
            })

        // 邮箱+密码 登录
        } else if (admin.email && admin.password) {
            result = await adminModel.getAdminInfoByEmailAndPwd({
                email: admin.email,
                password: admin.password
            })
        } else {
            result = false
        }
        
        return result 
    },

    /**
     *
     *  获取管理员列表
     * @returns 管理员数组
     */
    async getListInfo () {

        let result = await adminModel.getAdminList()
        return result
    },

    /**
     *
     * 根据id获取管理员信息
     * @param {*} id
     * @returns
     */
    async getItemInfo ( id ) {
        let result = await adminModel.getAdminItem({id: id})
        return result
    },

    /**
     *
     * 修改管理员信息
     * @param {*} admin
     * @returns
     */
    async updateAdminInfo ( admin ) {
        var time = datetime.getNowDatetime()
        let result = await adminModel.updateAdminInfo({
            admin_id: admin.admin_id,
            realname: admin.realname,
            name: admin.name,
            password: admin.password,
            role: admin.role,
            register_time: time,
            email: admin.email,
            mobile: admin.mobile
        })
        return result
    },

    /**
     *
     * 根据id删除管理员
     * @param {*} id
     * @returns
     */
    async deleteAdmin ( id ) {
        let result = await adminModel.deleteAdmin({id: id})
        return result
    },

    /**
     * 校验注册数据格式
     * @param {*} adminInfo
     */
    validateSignIn ( adminInfo) {
        let result = {
            success: false,
            message: ''
        }

        if ( !adminInfo.adminname ) {

            result.message = '用户名不能为空'
            return result
        } else if ( !adminInfo.password ) {
            
            result.message = '密码不能为空'
            return result
        }
        result.success = true
    }
}

module.exports = admin