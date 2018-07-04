// pages/personal/home/home.js
const app = getApp()
import ajax from '../../../utils/request';
import { pageTo } from '../../../utils/utils';
import { $wuxDialog, $wuxLoading } from '../../../templates/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personaliniturl: app.globalData.my_parentsinit,
   
    usertoken: "",
    memberType: "",
      studentlist:[
        {id:1, url: "../../../images/education/teacher.jpg", name:"周大生",classnumb:"五年二班"},
        { id: 2, url: "../../../images/education/teacher.jpg", name: "周小生", classnumb: "学前三班" },
      ],
      classlist:[
        { classid: 111,   classnumb: "五年二班" },
        { classid: 222,   classnumb: "学前三班" },
      ],
      user:{}
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

  
  personalinit: function () {
    ajax(this.data.personaliniturl).paramters({}).post().then(res => {
      console.log(res.data);
       wx.setStorageSync('studentlist', res.data.students);
      // wx.setStorageSync('memberType', memberType);
      this.setData({
        user:res.data


      })
    }).catch(err => {

    })
  },
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
    this.personalinit()
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