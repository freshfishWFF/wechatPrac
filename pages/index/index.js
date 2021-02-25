// pages/index/index.js
import request from '../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseURL:'http://localhost:3000',
    banners:[],
    recommandList:[],
    topList:[],//排行榜数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options){
    // wx.request({
    //   url: this.data.baseURL+'/banner',
    //   data:{type:2},
    //   success:(res)=>{
    //     console.log('请求成功');
    //   },
    //   fail:(err)=>{
    //     console.log(err);
    //   }
    // })
    let res = await request("/banner",{type:2});
    this.setData({
      banners: res.banners
    })
    let recommandList = await request("/personalized",{limit:10});
    console.log(recommandList)
    this.setData({
      recommandList: recommandList.result
    })
    let topListData = await request("")
    
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