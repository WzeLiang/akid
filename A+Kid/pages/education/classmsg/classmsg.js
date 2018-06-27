// pages/education/classmsg/classmsg.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentActive: 0,
    tabnavlist: [
      { name: "全部", classnumb: "" },
      { name: "吴亦凡", classnumb: "五年二班" },
      { name: "张小胖", classnumb: "学前三班" },
    ],
    usertoken: "",
    memberType: "",
    tabcontentlist: [
      [
        { studentname: "吴亦凡", classnumb: "五年二班", msgdate: "2018.08.11", content: "开课通知：今日游泳池水温28.2度，明天15日游泳池换水清洁不开放端午节放假通知：团操于2018年6月18日休课，泳池于2018年6月18日闭馆，其它区域正常使用，给您带来不便，敬请谅解" },
        { studentname: "张小胖", classnumb: "学前三班", msgdate: "2018.08.11", content: "开课通知：今日游泳池水温28.2度，明天15日游泳池换水清洁不开放端午节放假通知：团操于2018年6月18日休课，泳池于2018年6月18日闭馆，其它区域正常使用，给您带来不便，敬请谅解" },
      ],
      [
        { studentname: "吴亦凡", classnumb: "五年二班", msgdate: "2018.08.11", content: "开课通知：今日游泳池水温28.2度，明天15日游泳池换水清洁不开放端午节放假通知：团操于2018年6月18日休课，泳池于2018年6月18日闭馆，其它区域正常使用，给您带来不便，敬请谅解" },     
      ],
      [
        { studentname: "张小胖", classnumb: "学前三班", msgdate: "2018.08.11", content: "开课通知：今日游泳池水温28.2度，明天15日游泳池换水清洁不开放端午节放假通知：团操于2018年6月18日休课，泳池于2018年6月18日闭馆，其它区域正常使用，给您带来不便，敬请谅解" },
      ],
    ],
    teachercontentlist: [
      [
        { studentname: "吴亦凡", classnumb: "五年二班", msgdate: "2018.08.11", content: "开课通知：今日游泳池水温28.2度，明天15日游泳池换水清洁不开放端午节放假通知：团操于2018年6月18日休课，泳池于2018年6月18日闭馆，其它区域正常使用，给您带来不便，敬请谅解" },
        { studentname: "张小胖", classnumb: "学前三班", msgdate: "2018.08.11", content: "开课通知：今日游泳池水温28.2度，明天15日游泳池换水清洁不开放端午节放假通知：团操于2018年6月18日休课，泳池于2018年6月18日闭馆，其它区域正常使用，给您带来不便，敬请谅解" },
      ],
      
    ],
  },
   testclick:function(e){
    console.log(e)
    this.setData({
      currentActive: e.currentTarget.dataset.current
    })
  },
   toaddclassmsg:function(e){
     wx.navigateTo({
       url: './addclassmsg/addclassmsg',
     })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userToken = wx.getStorageSync("userToken")
    var memberType = wx.getStorageSync("memberType")
    console.log(userToken)
    this.setData({
      memberType: memberType
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