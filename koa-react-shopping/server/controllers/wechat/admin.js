const adminService = require('../../services/wechat/admin')
const admninCode = require('../../codes/admin')
const uploadFile = require('../../utils/upload').uploadPicture

module.exports = {

    /**
     * 注册管理员
     * @param {*} ctx 
     */
    async signUp ( ctx ) {
        
        if (ctx.method === 'GET') {
            await ctx.render('register', {
                title: '注册管理员信息'
            })

        } else if (ctx.method === 'POST') {
            
            let result = { success: false }
            const formdata = ctx.request.body
            
            let signupResult = await adminService.signUp( formdata )
            if ( signupResult ) {
                result.success = true
                result.message = '注册成功'
            } else {
                result.message = '注册失败'
            }

            ctx.body = result
        } else {
            ctx.body = 'Not Found'
        }
    },
    
    /**
     * 管理员登录
     * @param {*} ctx 
     */
    async signIn ( ctx ) {
        
        if ( ctx.method === 'GET') {

            await ctx.render('login', {
                title: '管理员登录操作'
            })
        } else if ( ctx.method === 'POST') {
            
            var result = { success: false }
            let formdata = ctx.request.body

            let signInResult = await adminService.signIn( formdata )
            if (signInResult && signInResult.length > 0) {
                result.success = true
                result.code = 0
                result.data = {
                    id: signInResult[0].admin_id,
                    realname: signInResult[0].realname,
                    name: signInResult[0].name,
                    email: signInResult[0].email,
                    role: signInResult[0].role,
                    mobile: signInResult[0].mobile,
                    verified: signInResult[0].verified
                }
            } else {
                result.code = -1
                result.message = '登录信息错误'
            }
            if ( formdata.source === 'form' && result.success === true ) {
                let session = ctx.session
                session.isLogin = true
                session.name = signInResult.name
                session.id = signInResult.admin_id
                ctx.redirect('/')
                return
            }
            ctx.body = result
        } else {
            ctx.body = 'Not Found'
        }
    },

    /**
     *
     * 获取管理员信息列表
     * @param {*} ctx
     */
    async getList ( ctx ) {
        let result = { success: false }

        let listResult = await adminService.getListInfo()
        console.log('listResult', listResult)

        if ( listResult && listResult.length > 0) {
            result.success = true
            result.code = 0
            result.data = listResult
        } else {
            result.code = -1
            result.message = '获取管理员信息列表失败'
        }
        ctx.body = result
    },

    /**
     * 获取管理员信息详情
     * @param {*} ctx
     */
    async adminInfo ( ctx ) {
        
        let result = { success: false }
        let id = ctx.params.id || ctx.query.id

        let infoResult = await adminService.getItemInfo( id )

        if ( infoResult && infoResult.length > 0 ) {
            result.success = true
            result.code = 0
            result.data = infoResult
        } else {
            result.code = -1
            result.message = '未找到你需要数据'
        }
        ctx.body = result
    },

    /**
     *
     * 修改管理员信息
     * @param {*} ctx
     */
    async updateAdminInfo ( ctx ) {
        
        let result = { success: false }
        let formdata = ctx.request.body
        let id = ctx.params.id
        console.log(id)

        if ( ctx.method === 'GET' ) {
            let item = await adminService.getItemInfo(id)
            if (item.length == 0) {
                ctx.body = '访问的资源不存在'
                return
              }
            await ctx.render('update', {
                title: '修改管理员信息',
                detail: item[0]
            })
            return
        }

        let updateResult = await adminService.updateAdminInfo( formdata )

        if ( updateResult ) {
            result.success = true
            result.code = 0
            result.message = '信息修改成功'
        } else {
            result.code = -1
            result.mesage = '信息修改失败'
        }
        ctx.body = result
    },

    /**
     *
     * 根据id删除管理员
     * @param {*} ctx
     */
    async deleteAdmin ( ctx ) {
        let id = ctx.params.id
        var result = { success: false }
        
        let deleteResult = await adminService.deleteAdmin( id )
        if (deleteResult) {
            result.success = true
            result.code = 0
            result = '管理员删除成功'
        } else {
            result.code = 0
            result = '管理员删除失败'
        }
        ctx.body = result
    },

    /**
     *
     * 异步上传图片
     * @param {*} ctx
     */
    async uploader( ctx ) {

        if ( ctx.method === 'GET') {
            await ctx.render('upload', {
                title: '上传图片操作'
            })
            return
        }

        // 上传文件事件
        let result = await uploadFile( ctx, {
            fileType: 'album'
        })
        console.log('result', result)
    }

}