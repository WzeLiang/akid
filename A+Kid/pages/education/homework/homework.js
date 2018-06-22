// pages/education/homework/homework.js
const app = getApp()
var choosedate = require("../../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usertype: app.globalData.usertype,
    weekarr: [],
    weeklist: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daylist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  preweek: function () {
    choosedate.pre()
    this.setData({
      weekarr: choosedate.cells,
      daylist: choosedate.weekday,
    })
  },
  nextweek: function () {
    choosedate.next()
    this.setData({
      weekarr: choosedate.cells,
      daylist: choosedate.weekday,
    })
  },
  onLoad: function (options) {
    choosedate.setDate(new Date());
    this.setData({
      weekarr: choosedate.cells,
      daylist: choosedate.weekday,
    })
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