// pages/enroll/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择您的身份','老师', '家长',],
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
  registersubmit:function(e){
    console.log(e.detail.value);
    var formdata=e.detail.value;
    if (formdata.type==0){
      this.showMessage('请选择身份');
    }else if(formdata.type==1){
      if (formdata.tel==''){
        this.showMessage('请输入正确的手机号');
      } else if (formdata.name==''){
        this.showMessage('请输入姓名');
      } else if (formdata.teachernumb == '') {
        this.showMessage('请输入教师编号');
      }
      else if (formdata.provingcode == '') {
        this.showMessage('请输入验证码');
      } else if (formdata.pass==""){
        this.showMessage('请输入密码');
      }else{
        //这里是访问后台接口
      }
    }else{
      if (formdata.tel =='') {
        this.showMessage('请输入正确的手机号');
      } else if (formdata.studentid == '') {
        this.showMessage('请输入学号');
      } else if (formdata.provingcode == '') {
        this.showMessage('请输入验证码');
      } else if (formdata.pass == "") {
        this.showMessage('请输入密码');
      } else {
        //这里是访问后台接口
      }
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