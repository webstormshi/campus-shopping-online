/** 
 * 商品业务操作
*/

const validator = require('validator')
const productModel = require('../../models/wechat/product')
const productCode = require('../../codes/product')
const datatime = require('../../utils/datetime')

const product = {

    /**
     * 
     * 添加商品信息
     * @param {*} product
     */
    async addproduct ( product ) {
        var add_time = datatime.getNowDatetime()
        let result = await productModel.insert({
            shop_id: product.shop_id,
            name: product.name,
            type: product.type,
            price: product.price,
            discount: product.discount||0,
            express_price: product.express_price||0,
            avatar: product.avatar ||'',
            content: product.content,
            abstract: product.abstract||'',
            images: product.images||'' ,
            activity_desc: product.activity_desc||'',
            add_time: add_time
        })
        return result
    },

    /**
     *
     * 获取商品列表
     * @returns
     */
    async productList () {
        let result = await productModel.getList()
        return result
    },

    /**
     *
     * 根据id获取商品详情
     * @param {*} id
     * @returns
     */
    async productItem ( id ) {
        let result = await productModel.getItem({id: id})
        return result
    },

    /**
     *
     * 根据id删除商品信息
     * @param {*} id
     * @returns
     */
    async deleteProduct ( id ) {
        let result = await productModel.deleteItem({id: id})
        return result
    },

    /**
     *
     * 根据id修改商品信息
     * @param {*} product
     * @returns
     */
    async editproduct ( product ) {
        var add_time = datatime.getNowDatetime()
        let result = await productModel.update({
            shop_id: product.shop_id,
            name: product.name,
            type: product.type,
            price: product.price,
            discount: product.discount||0,
            express_price: product.express_price||0,
            avatar: product.avatar,
            content: product.content,
            abstract: product.abstract,
            images: product.images,
            activity_desc: product.activity_desc,
            add_time: add_time
        })
        return result
    }
}

module.exports = product