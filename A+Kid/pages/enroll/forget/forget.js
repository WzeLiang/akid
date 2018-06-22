// pages/enroll/forget/forget.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择您的身份', '老师', '家长',],
    index: 0,
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
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
    console.log(this.data.index)
  }, 
  forgetsubmit:function(e){
    console.log(e.detail.value);
    var formdata = e.detail.value;
    if(formdata.tel==""){
      this.showMessage('请输入手机号码');
    } else if (formdata.type == 0) {
      this.showMessage('请选择身份');
    }else if (formdata.pass == ""){
      this.showMessage('请输入密码');
    } else if (formdata.provingcode==''){
      this.showMessage('请输入验证码');
    }else{
      //调用接口
      this.showMessage('密码重置成功');
      setTimeout(function () {
        //要延时执行的代码 
        wx.navigateBack({
          
        }) 
      }, 1500) //延迟时间 这里是1秒  
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