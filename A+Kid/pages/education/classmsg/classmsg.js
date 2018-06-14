// pages/education/classmsg/classmsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [{ classnumb: "全部", name: "" }, { classnumb: "三年1班", name: "小泽" }, { classnumb: "学前三班", name: "leo" }],
    //count:[0,2,3],                                  //记录不同状态记录的数量
    currentTab: 3,
    type:1 //1老师/0家长
  },
  navbarTap: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx,
      TypeItem: that.data.navbar[that.data.currentTab]
    })
  },
  toaddclassmsg:function(){
    wx.navigateTo({
      url: './addclassmsg/addclassmsg',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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