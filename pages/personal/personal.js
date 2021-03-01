// pages/personal/personal.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    profile:null,
    history: []
  },
  // 转到登录页面
  toLoginPage(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    // 后去storage中的 profile
    let _this = this;
    wx.getStorage({
      key: 'logInfo',
      async success(res){
        let str = JSON.parse(res.data);
        _this.setData({
          profile: str.profile
        });
        //获取播放历史
        let history = await request('/user/record',{uid:str.profile.userId,type:0});
        // console.log(history);
        if(history.code == 200){
          _this.setData({
            history: history.allData.slice(0,15)
          })
        }
      }
    })
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