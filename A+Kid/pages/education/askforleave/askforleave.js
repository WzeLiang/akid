// pages/education/askforleave/askforleave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择学生', '老师', '家长',],
    index: 0,
    startdate: new Date(),
    enddate: new Date()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  startdateselect: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      date: e.detail.value
    });
    console.log(this.data.date)
  }, 
  enddateselect: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      date: e.detail.value
    });
    console.log(this.data.date)
  }, 

  onLoad: function (options) {
  var time =new Date()
    console.log(time.toDateString);
    console.log(time.getMonth);
    console.log(time.getDay);
    this.setData({
      date: time
     
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