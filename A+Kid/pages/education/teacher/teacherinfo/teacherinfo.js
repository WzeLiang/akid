// pages/education/teacher/teacherinfo/teacherinfo.js
const app = getApp()
import ajax from '../../../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacherinfourl: app.globalData.teacherdetail,
    thechaerid:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      thechaerid: options.teacherId
    })
    this.getteacherinfo()
  },
  //获取教师详情
  getteacherinfo: function () {
    var datas = {
      "thechaerid": this.data.thechaerid
    }
    ajax(this.data.teacherinfourl).paramters(datas).post().then(res => {
      console.log(res.data);
      // this.setData({
      //   schoollist: res.data.merchants,
      //   teacherlist: res.data.teachers
      // })

    }).catch(err => {

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