// pages/education/syllabus/syllabus.js
const app = getApp()
var choosedate = require("../../../utils/data.js")
Page({
  data: {
    usertype: app.globalData.usertype,
    weekarr: [],
    aaa: "11",
    daylist: [],
    syllabusmap: [
      {
        classnumb: "五年二班",
        studentid: 222,
        studentname: "王大锤",
        startdate: "2018.12.11",
        enddate: "2018.12.18",
        syllabuslist: [
          { date: "2018.12.11", weeks: "周一", sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.12", weeks: "周二", sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.13", weeks: "周三", sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.14", weeks: "周四", sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.15", weeks: "周五", sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.16", weeks: "周六", sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.17", weeks: "周日", sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] }
        ]
      }
    ]
  },
  //格式化日期 


  preweek: function () {
    choosedate.pre()
    this.setData({
      weekarr: choosedate.cells,
    })
  },
  nextweek: function () {
    choosedate.next()
    this.setData({
      weekarr: choosedate.cells,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bbb: function () {
    //console.log(this.data.aaa)
  },

  onLoad: function (options) {
    console.log(choosedate.cells)
    console.log(choosedate.weekday)
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