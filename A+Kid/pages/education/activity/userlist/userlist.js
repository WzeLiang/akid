// pages/education/activity/userlist/userlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      activitytitle:"",
      activitydate: "",
      activityuserlist:[
        { studentid: 1, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 2, studentname: "王思聪", classnumb: "学前1班", parentnamne: "王健林" },
        { studentid: 3, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 4, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 5, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 6, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 7, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 8, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 9, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 4, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 5, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 6, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 7, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 8, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
        { studentid: 9, studentname: "张小胖", classnumb: "五年二班", parentnamne: "张大胖" },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      activitytitle: options.title,
      activitydate: options.date
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