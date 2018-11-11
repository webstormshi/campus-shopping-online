// pages/product/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    nursery_list: [{
      id: '123',
      logo: '../../images/avatar.png',
      position_work: 'position_work',
      schoolname: 'schoolname',
      city_name: 'city_name',
      add_time_format: 'add_time_format',
      salary: 'salary'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  changeTab: function(e) {
    var idx = e.target.dataset.index
    this.setData({
      activeIndex: idx
    })
  },

  swiperTab: function (e) {
    var type = e.detail.current;
    this.setData({
      activeIndex: e.detail.current
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})