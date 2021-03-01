// pages/recommand/recommand.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lycList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    //获取每日推荐
    wx.getStorage({
      key: 'logInfo',
      async success(res){
        var cookie = (JSON.parse(res.data)).cookie;
        console.log(cookie);
        let lycList = await request('/recommend/songs',{cookie:cookie});
        console.log(lycList);
        _this.setData({
          lycList: lycList.data.dailySongs
        })
      }
    })
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