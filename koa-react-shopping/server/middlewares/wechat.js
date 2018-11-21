const config = require('../../config').wechat
const request = require('request')


const wechat = {

    async decode( data ) {
        console.log( 'wechat', data )
        setTimeout(() => {
            return 'jiang xi'
        }, 1000)
    }

}

module.exports = wechat