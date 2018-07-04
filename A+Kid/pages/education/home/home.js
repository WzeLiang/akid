// pages/education/home/home.js
const app = getApp()
import ajax from '../../../utils/request';
import { pageTo } from '../../../utils/utils';
import { $wuxDialog, $wuxLoading } from '../../../templates/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    educationiniturl:  app.globalData.educationInit,
    bannerlisturl:app.globalData.educationbanners,
    adviceiniturl: app.globalData.educationadvice,
    usertoken:"",
    memberType:"",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    circular: true
  },

  /**
   * 生命周期函数--监听页面加载
   */

  getbannerlist:function(){
    ajax(this.data.bannerlisturl).paramters({}).post().then(res => {
      console.log(res);
    }).catch(err=>{
     
    })
  },
educationinit: function () {
  ajax(this.data.educationiniturl).paramters({}).post().then(res => {
     console.log(res);
  }).catch(err => {
    
  })
  },
adviceinit:function(){
  ajax(this.data.adviceiniturl).paramters({}).post().then(res => {
    console.log(res);
  }).catch(err => {
    
  })
},
  clearstorage:function(){
    var that = this;
    wx.clearStorage({
      success: function (res) {
        that.setData({
          storageContent: ''
        })
      }
    });
    var userToken = wx.getStorageSync("userToken")
    console.log(userToken)
  },
  onLoad: function (options) {
    var userToken = wx.getStorageSync("userToken")
    console.log(userToken)
       this.getbannerlist()
      //  this.educationinit()
       // this.adviceinit()
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