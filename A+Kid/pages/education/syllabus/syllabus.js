// pages/education/syllabus/syllabus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 1, //1老师/0家长
    cells:["2","1"],
    clen:7,
    currentFirstDate:""
  },
  formatDate:function (date) {
    console.log(date)
    var year = date.getFullYear() + '年';
    var month = (date.getMonth() + 1) + '月';
    var day = date.getDate() + '日';
    var week = '(' + ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()] + ')';

    return year + month + day + ' ' + week;
  },
  addDate:function (date, n) {
    date.setDate(date.getDate() + n);
    return date;
  },
  setDate:function (date) {
    var week = date.getDay() - 1;
    console.log(week)
    date = this.addDate(date, week * -1);
    this.currentFirstDate = new Date(date);
    console.log(this.currentFirstDate)
    for (let i = 0; i < this.clen; i++) {
       this.cells[i] = this.formatDate(i == 0 ? date : this.addDate(date, 1));
       console.log("11");
    }
    console.log(this.cells)
  },
  preweek:function(){

  },
  nextweek:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setDate(new Date())
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