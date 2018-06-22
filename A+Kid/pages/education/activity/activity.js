// pages/education/activity/activity.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usertype:"",
    currentActive:0,
    tabnavlist0:["进行中","已报名","已结束"],
    tabnavlist1: ["进行中",  "已结束"],
    tabcontentlist0:[
      [
        { title: "进行中活动1", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", status: 1 },
        { title: "进行中活动2", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", status: 1 },
        { title: "进行中活动3", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", status: 1 }
      ],
      [
        { title: "已报名活动1", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明", status:1 },
        { title: "已报名活动2", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明", status:1 },
        { title: "已报名活动3", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明", status: 1}
      ],
      [
        { title: "已结束活动1", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明" , status:0 },
        { title: "已结束活动2", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明" , status: 0 },
        { title: "已结束活动3", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明", status: 0 }
      ]
    ],
    tabcontentlist1: [
      [
        { title: "进行中活动1", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", status: 1 },
        { title: "进行中活动2", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", status: 1 },
        { title: "进行中活动3", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", status: 1 }
      ],
      [
        { title: "已结束活动1", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明", status: 0 },
        { title: "已结束活动2", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明", status: 0 },
        { title: "已结束活动3", activitydate: "2018.08.11", joindata: "2018.11.22", member: "五年级二班全体成员", username: "张小明", status: 0 }
      ]
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  testclick:function(e){
    console.log(e)
    this.setData({
      currentActive: e.currentTarget.dataset.current
    })
  },
 
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'usertype',
      success: function (res) {
        that.setData({
          usertype: res.data
        })
      },
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