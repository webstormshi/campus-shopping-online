const productService = require('../../services/wechat/product')
const productCode = require('../../codes/product')

module.exports = {

  /**
  * 添加商品操作
  * @param {*} ctx 上下文对象
  */
  async addproduct( ctx ) {

    // 如果是get请求
    if (ctx.url === '/product/add' && ctx.method === 'GET' ) {
      var title = '添加商品信息'
      await ctx.render('product' , {
        title
      })

      // 如果是post请求
    } else if(ctx.url === '/product/add' && ctx.method === 'POST') {
      let result = {
        success: false,
        message: '',
        code: ''
      }

      const formdata = ctx.request.body

      let addResult = await productService.addproduct( formdata )
      if ( addResult ) {
        result.success = true
        result.code = 0
        result.message = '数据插入成功'
      } else {
        result.code = -1
        result.message = '数据插入失败'
      }

      ctx.body = result

      // 否则未找到
    } else {
      ctx.body = 'Not Found'
    }
  },

  /**
   *
   * 获取商品信息列表
   * @param {*} ctx
   */
  async productList( ctx ) {
    let result = {
      success: false,
      code: '',
      data: null
    }
    if ( ctx.url ===  '/product/list' && ctx.method === 'GET' ) {

      const listResult = await productService.productList()
      if ( listResult ) {
        result.success = true
        result.code = 0
        result.data = listResult
      } else {
        result.code = -1
        result.message = '获取数据失败'
      }

      ctx.body = result
    } else {
      ctx.body = 'Not Found'
    }
  },

  /**
   *
   * 根据id查询商品信息
   * @param {*} ctx
   */
  async productItem ( ctx ) {
    if ( ctx.method === 'GET' ) {
      const id = ctx.params.id
      let result = {
        success: false,
        code: '',
        data: null
      }

      const itemResult = await productService.productItem(id)
      if ( itemResult ) {
        result.success = true
        result.code = 0
        result.data = itemResult
      } else {
        result.code = -1
        result.message = ' 获取商品数据失败'
      }

      ctx.body = result
    } else {
      ctx.body = 'Not Found'
    }
  },

  /**
   *
   * 根据id删除商品信息
   * @param {*} ctx
   */
  async deleteProduct ( ctx ) {
    let result = {
      success: false,
      code: ''
    }

    if ( ctx.method === 'POST') {
      const id = ctx.params.id
      const deleteResult = await productService.deleteProduct(id)
      if ( deleteResult ) {
        result.code = 0
        result.message = '商品删除成功'
      } else {
        result.code = -1
        result.message = '商品删除失败'
      }
      ctx.body = result
    } else {
      ctx.body === 'Not Found'
    }
  },

  /**
   *
   * 修改产品信息
   * @param {*} ctx
   */
  async editProduct ( ctx ) {
    let result = {
      success: false,
      message: '',
      code: ''
    }

    const formdata = ctx.request.body

      let addResult = await productService.editproduct( formdata )
      if ( addResult ) {
        result.success = true
        result.code = 0
        result.message = '数据修改成功'
      } else {
        result.code = -1
        result.message = '数据修改失败'
      }

      ctx.body = result
  } 

}