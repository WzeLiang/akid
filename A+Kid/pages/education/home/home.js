// pages/education/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    educationiniturl: app.globalData.testurl + app.globalData.educationInit,
    bannerlisturl: app.globalData.testurl + app.globalData.educationbanners,
    usertoken:"",
    memberType:"",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    circular: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  educationinit: function () {
    wx.request({
      url: this.data.educationiniturl,
      method: "POST",
      
      data: {
        data: {
          "userToken": this.data.usertoken
        }
      }
      , success: function (res) {
        console.log(res);
      }
    })
  },
  getbannerlist:function(){
    wx.request({
      url: this.data.bannerlisturl,
      method: "POST",
      data: {
        data: {
          "userToken": this.data.usertoken
        }
      }
      , success: function (res) {
        console.log(res);
      }
    })
  },
  onLoad: function (options) {
    var that= this
    wx.getStorage({
      key: 'user',
      success: function (res) {
      
        // success
        that.setData({
          usertoken: res.data.userToken,
          memberType: res.data.memberType
        })
       
      }
    })
    setTimeout(function () {
      that.educationinit()
      that.getbannerlist()
    }, 1000)
    
    
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