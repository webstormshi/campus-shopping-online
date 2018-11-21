const userService = require('../../services/wechat/user')
const userCode = require('../../codes/user')

module.exports = {
 
    /**
     *
     * 用户注册
     * @param {*} ctx
     */
    async signUp ( ctx ) {
        
        if ( ctx.method === 'GET' ) {
            await ctx.render('user_signUp', {
                title: '用户注册'
            })
        } else if ( ctx.method === 'POST' ) {
            let formdata = ctx.request.body
            let result = { success: false }
            let regResult = await userService.registerUser( formdata )
            if ( regResult ) {
                result.success = true
                result.code = 0
                result.data = result
            } else {
                result.code = -1
                result.message = '用户注册失败'
            }

            ctx.body = result
        }
    },

     /**
     *
     * 获取所有用户列表 —— 管理员权限
     * @param {*} ctx
     */
    async getUserList ( ctx ) {
        
        let result = { success: false }
        let listResult = await userService.getUserList()
        if ( listResult ) {
            result.success = true
            result.code = 0
            result.data = listResult
        } else {
            result.code = -1
            result.message = '获取用户列表失败'
        }
    },

     /**
     *
     * 获取用户信息
     * @param {*} ctx
     */
    async getUserInfo ( ctx ) {
        
        let result = { success: false }
        let id = ctx.params.id
        let detailResult = await userService.getUserInfo( id )
        if ( detailResult ) {
            result.success = true
            result.code = 0
            result.data = detailResult
        } else {
            result.code = -1
            result.message = '获取用户信息失败'
        }

        ctx.body = result
    },

     /**
     *
     * 获取用户微信信息
     * @param {*} ctx
     */
    async getWXInfo ( ctx ) {
        
        let result = { success: false }
        let data = ctx.params.body       // data为加密的数据 code iv entcydata 
        let infoResult = await userService.getWXInfo( data )
        if ( infoResult ) {
            result.success = true
            result.code = 0
            result.data = infoResult
        } else {
            result.code = -1
            result.message = '获取用户微信信息失败'
        }

        ctx.body = result
    },

     /**
     *
     * 获取用户微信电话
     * @param {*} ctx
     */
    async getWXPhone ( ctx ) {
        
        let result = { success: false }
        let data = ctx.params.body       // data为加密的数据 code iv entcydata 
        let phoneResult = await userService.getWXPhone( data )
        if ( phoneResult ) {
            result.success = true
            result.code = 0
            result.data = phoneResult
        } else {
            result.code = -1
            result.message = '获取用户微信电话失败'
        }

        ctx.body = result
    },

     /**
     *
     * 修改用户信息
     * @param {*} ctx
     */
    async updateInfo ( ctx ) {
        
        let id = ctx.params.id
        let formdata = ctx.request.body
        formdata.uid = id
        let result = { success: false }
        let infoResult = await userService.updateInfo( formdata )
       
        if ( infoResult ) {
            result.success = true
            result.code = 0
            result.data = infoResult
        } else {
            result.code = -1
            result.message = '获取用户微信电话失败'
        }

        ctx.body = result
    }
}