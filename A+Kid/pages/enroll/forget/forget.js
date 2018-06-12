// pages/enroll/forget/forget.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  forgetsubmit:function(e){
    console.log(e.detail.value);
    var formdata = e.detail.value;
    if(formdata.tel==""){
      this.showMessage('请输入手机号码');
    } else if (formdata.pass == ""){
      this.showMessage('请输入密码');
    } else if (formdata.provingcode==''){
      this.showMessage('请输入验证码');
    }else{
      //调用接口
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