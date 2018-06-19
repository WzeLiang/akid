// pages/personal/addrelation/addrelation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolarray: ['请选择>', '上海第一人民小学', '星星幼儿园'],
    parentarray: ['请选择>', '父亲', '母亲'],
    schoolindex: 0,
    parentindex:0,
    showMessage: false,
    messageContent: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
  schoolSelected:function(e){
    this.setData({
      schoolindex: e.detail.value
    });
    console.log(this.data.schoolindex)
  },
  parentSelected:function(e){
    this.setData({
      parentindex: e.detail.value
    });
    console.log(this.data.parentindex)
  },

  addrelationsubmit: function (e) {
    console.log(e.detail.value);
    var formdata = e.detail.value;
    if (formdata.name == "") {
      this.showMessage('请输入学生姓名');
    } else if (formdata.code == '') {
      this.showMessage('请输入学生编号');
    } else if (formdata.school == 0) {
      this.showMessage('请选择学校');
    } else if (formdata.parent == 0) {
      this.showMessage('请选择关系');
    }  else {
      //调用接口
     wx.switchTab({
       url: '../home/home',
     })
    }
  },
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