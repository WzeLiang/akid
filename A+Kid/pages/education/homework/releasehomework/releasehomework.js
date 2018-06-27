// pages/education/homework/releasehomework/releasehomework.js
const app = getApp()
import ajax from '../../../../utils/request';
import { pageTo } from '../../../../utils/utils';
import { $wuxDialog, $wuxLoading } from '../../../../templates/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerlisturl: app.globalData.educationbanners,
    array: ['请选择科目', '数学', '英语',],
    subjectindex: 0,
    date: new Date()
  },
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      subjectindex: e.detail.value
    });
    console.log(this.data.subjectindex)
  }, 
  dateselect: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      date: e.detail.value
    });
    console.log(this.data.date)
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  getbannerlist: function () {
    ajax(this.data.bannerlisturl).paramters({}).post().then(res => {
      console.log(res);
    }).catch(err => {

    })
  },
  onLoad: function (options) {
    var time =new Date()
    console.log(time.toDateString);
    console.log(time.getMonth);
    console.log(time.getDay);
    this.setData({
      date: time
     
    });
    var userToken = wx.getStorageSync("userToken")
    console.log(userToken)
    this.getbannerlist()
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