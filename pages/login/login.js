// pages/login/login.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    password:""
  },
  // 处理输入框数据绑定
  handleInput(event){
    var name = event.target.dataset.name;
    var value = event.detail.value;
    this.setData({
      [name]:value
    });
  },
  // 登录
  async doLogin(){
    console.log(this.data.phone+"   "+ this.data.password);
    //进行输入
    let {phone,password} = this.data;
    let res = await request("/login/cellphone",{phone:phone,password:password},"POST");
    console.log(res);
    if(res.code == 200){
      //说明登录成功
      wx.setStorage({
        data: JSON.stringify(res),
        key: 'logInfo',
      });
      wx.navigateBack({
        delta: 1,
      })
    }
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