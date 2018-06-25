// pages/enroll/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    loginURL: app.globalData.testurl + app.globalData.login,
    showMessage: false,
    messageContent: '',
  },
  showMessage: function (text) {
    var that = this
    that.setData({
      showMessage: true,
      messageContent: text
    })
    setTimeout(function () {
      that.setData({
        showMessage: false,
        messageContent: ''
      })
    }, 3000)
  },
  loginsubmit:function(e){
    var that=this
    console.log(e.detail.value);
    var formdata = e.detail.value;
    if (formdata.phone==''){
      this.showMessage('请输入手机号');
    } else if (formdata.password == ''){
      this.showMessage('请输入密码');
    }else{
      wx.request({
        url: this.data.loginURL,
        method:"POST",
        data:{
          data:{
            "phone": formdata.phone,
            "password": formdata.password
          }
        },success:function(res){
          
          if (res.data.respCode == "000"){
            wx.setStorageSync('user', res.data.data)
            wx.switchTab({
              url: '../../education/home/home',
            })
          }else{
            that.showMessage("账户名或密码错误");
            return false;
          }
        }
      })
    }
  },
  /**app.globalData.usertype,
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