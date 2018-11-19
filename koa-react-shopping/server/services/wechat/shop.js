/** 
 * 店铺的业务操作
*/

const shopModel = require('../../models/wechat/shop')
const shopCode = require('../../codes/shop')
const datetime = require('../../utils/datetime')

const shop = {

    /**
     *
     * 创建店铺
     * @param {*} shop
     * @returns
     */
    async addShop ( shop ) {
        const time = datetime.getNowDatetime()
        let result = await shopModel.create({
            admin_id: shop.admin_id,
            name: shop.name,
            description: shop.description,
            address: shop.address,
            avatar: shop.avatar,
            mobile: shop.mobile,
            publish_time: time,
            location: shop.location
        })
        return result
    },

    /**
     *
     * 获取店铺列表
     * @returns
     */
    async getShopList () {
        let result = await shopModel.getShopList()
        return result
    },

    /**
     *
     * 获取店铺详情
     * @param {*} id
     * @returns
     */
    async getShopItem (id) {
        let result = await shopModel.getShopItem({id: id})
        return result
    },

    /**
     *
     * 修改店铺信息
     * @param {*} shop
     * @returns
     */
    async updateShop( shop ) {
        const time = datetime.getNowDatetime()
        let result = await shopModel.update({
            shop_id: shop_id,
            admin_id: shop.admin_id,
            name: shop.name,
            description: shop.description,
            address: shop.address,
            avatar: shop.avatar,
            mobile: shop.mobile,
            publish_time: time,
            location: shop.location
        })
        return result
    },

    /**
     *
     * 删除店铺
     * @param {*} id
     * @returns
     */
    async deleteShop( id ) {
        let result = await shopModel.deleteShop({id: id})
        return result
    }
}

module.exports = shop