// pages/personal/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      usertoken: "",
      memberType:"",
      studentlist:[
        {id:1, url: "../../../images/education/teacher.jpg", name:"周大生",classnumb:"五年二班"},
        { id: 2, url: "../../../images/education/teacher.jpg", name: "周小生", classnumb: "学前三班" },
      ],
      classlist:[
        { classid: 111,   classnumb: "五年二班" },
        { classid: 222,   classnumb: "学前三班" },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toscore:function(e){
    wx.navigateTo({
      url: '../score/score',
    })
  },
  toappointment:function(e){
    wx.navigateTo({
      url: '../appointment/appointment',
    })
  },
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'user',
      success: function (res) {

        // success
        that.setData({
          usertoken: res.data.userToken,
          memberType: res.data.memberType
        })
        console.log(that.data.usertoken)
        console.log(that.data.memberType)
      }
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