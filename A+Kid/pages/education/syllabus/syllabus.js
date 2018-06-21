// pages/education/syllabus/syllabus.js
const app = getApp()
var now = new Date();                    //当前日期
var nowDayOfWeek = now.getDay();         //今天本周的第几天
var nowDay = now.getDate();              //当前日
var nowMonth = now.getMonth();           //当前月
var nowYear = now.getYear();             //当前年
console.log(nowYear)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usertype: app.globalData.usertype,
    cells:["2","1"],
    clen:7,
    currentFirstDate:"",
    syllabusmap:[
      { 
        classnumb:"五年二班",
        studentid: 222,
        studentname: "王大锤",
        startdate: "2018.12.11",
        enddate:"2018.12.18",
        syllabuslist:[
          { date: "2018.12.11", weeks:"周一",  sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.12", weeks: "周二",  sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.13", weeks: "周三",  sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.14", weeks: "周四",  sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.15", weeks: "周五", sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.16", weeks: "周六",  sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] },
          { date: "2018.12.17", weeks: "周日",  sunject: ["数学", "语文", "思想品德", "政治", "化学", "地理", "自然科学", "物理"] }
        ]
      }
    ]
  },
 
  preweek:function(){

  },
  nextweek:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  getdate:function(){
    
  },
  //格式化日期
  formatDate:function (date) {
    
    var myyear = date.getYear();
    console.log(myyear)
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();

    if(mymonth < 10) {
      mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
      myweekday = "0" + myweekday;
    }
    return (myyear + "-" + mymonth + "-" + myweekday);
  },
  //获取本周开始时间
  getWeekStartDate:function() {
    var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
    // return formatDate(weekStartDate);
    console.log(weekStartDate)
   
  },
  //获得本周的结束日期
   getWeekEndDate:function() {
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
   
  //  return formatDate(weekEndDate);
   
  },
  onLoad: function (options) {
    this.getdate()
    // this.formatDate()
    this.getWeekStartDate()
    this.getWeekEndDate()

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