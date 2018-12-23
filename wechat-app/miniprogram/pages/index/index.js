var plugin = requirePlugin("myPlugin")

Page({
  data: {
    showMask: true,
    list: [{
      id: '123',
      logo: '../../images/avatar.png',
      name: 'name',
      region: 'csdc',
      num: '1234'
    }],
    navList: [{
      tid: '1',
      text: '圣诞节',
      logo: '../../images/christmas.png'
    }, {
        tid: '2',
        text: '优惠券',
        logo: '../../images/coupon_icon.png'
      }, {
        tid: '3',
        text: '二手物品',
        logo: '../../images/sechand.png'
      }, {
        tid: '4',
        text: '活动',
        logo: '../../images/activity.png'
      }, {
        tid: '5',
        text: '礼物',
        logo: '../../images/gift.png'
      }],
    images: [
      '../../images/swpier.jpg',
      '../../images/swpier.jpg',
      '../../images/swpier.jpg'
    ]
  },
  closeMask: function() {
    this.setData({
      showMask: false
    })
  },
  onLoad: function() {
    plugin.getData()
  }
})