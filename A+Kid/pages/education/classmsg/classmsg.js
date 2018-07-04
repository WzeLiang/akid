// pages/education/classmsg/classmsg.js
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
    parentsgetlisturl: app.globalData.advice_parentslist,
    user:"",
    classidlist:[],
    currentActive: 0,
    tabnavlist: [
      { studentName: "全部", classnumb: "" },
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
   personalinit: function () {
     ajax(this.data.personaliniturl).paramters({}).post().then(res => {
       console.log(res.data);
       this.setData({
         user: res.data,
         tabnavlist: this.data.tabnavlist.concat(res.data.students),
       })
      //  for(let i=0;i<=res.data.students.length;i++){
      //    console.log(res.data.students[i].classId)
      //    this.setData({
      //      classidlist: this.classidlist.push(res.data.students[i].classId)
      //    })
      //  }
       console.log(this.data.tabnavlist)
     }).catch(err => {

     })
   },
   //根据班级获取班级通知
   parentgetclassmsg:function(){
     var classid = this.data.classidlist
     ajax(this.data.parentsgetlisturl).paramters({}).post().then(res => {
       console.log(res.data);
       this.setData({
         
       })
   
     }).catch(err => {

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
    var memberType = wx.getStorageSync("memberType")
    this.setData({
      memberType: memberType
    })
    this.personalinit()
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