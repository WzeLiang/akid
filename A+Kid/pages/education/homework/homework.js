// pages/education/homework/homework.js

const app = getApp();
import ajax from '../../../utils/request';
import { pageTo } from '../../../utils/utils';
var choosedate = require("../../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeworkparentsurl: app.globalData.homeworkparents,
    memberType: "",
    weekarr: [],
    weeklist: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daylist: [],
    postweekarray:[],//提交日期列表
    homeworklist:[],
    num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  preweek: function () {
    choosedate.pre()
    this.setData({
      weekarr: choosedate.cells,
      daylist: choosedate.weekday,
      postweekarray: choosedate.postweekarray,
    })
    this.parenthomework()
  },
  nextweek: function () {
    choosedate.next()
    this.setData({
      weekarr: choosedate.cells,
      daylist: choosedate.weekday,
      postweekarray:choosedate.postweekarray,
    })
    this.parenthomework()
  },
  onLoad: function (options) {
    choosedate.setDate(new Date());
    this.setData({
      weekarr: choosedate.cells,
      daylist: choosedate.weekday,
      postweekarray: choosedate.postweekarray,
    })
    console.log(this.data.postweekarray)
    var memberType = wx.getStorageSync("memberType")
    var studentlist = wx.getStorageSync("studentlist")
    if (!studentlist) {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    } else {
      this.setData({
        studentlist: studentlist
      })
      console.log(this.data.studentlist)
    }
    this.setData({
      memberType: memberType,
    })
    this.parenthomework()
  },
  parenthomework:function(e){
    let homeworkDate='';
    if(!e){
      console.log("初次加载")
      console.log(this.data.postweekarray[0])
      homeworkDate=this.data.postweekarray[0]
    }
    else{
      homeworkDate= this.data.postweekarray[e.currentTarget.dataset.index];
      this.setData({
        num: e.currentTarget.dataset.index
      })
    }
    console.log(homeworkDate)
    var datas={
      "homeworkDate": homeworkDate
    }
    ajax(this.data.homeworkparentsurl).paramters(datas).post().then(res => {
      console.log(res.data);
      this.setData({
        homeworklist:res.data
      })
      console.log(this.data.homeworklist)
    }).catch(err => {

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