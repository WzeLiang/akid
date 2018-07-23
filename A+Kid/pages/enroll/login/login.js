// pages/enroll/login/login.js
const app = getApp()
import WxValidate from '../../../utils/validate.js';
import { sha1 } from '../../../utils/util';
import ajax from '../../../utils/request';
import { pageTo } from '../../../utils/utils';
import WxNotificationCenter from '../../../utils/wxnotification';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择您的身份', '家长', '老师',],
    index: 0,
    loginURL: app.globalData.login,
    showMessage: false,
    messageContent: '',
    memberType: 0,
  },
  showMessage: function (text) {
    var that = this
    that.setData({
      showMessage: true,
      messageContent: text
    })
    setTimeout(function () {
      that.setData({
        showMessage: false,
        messageContent: ''
      })
    }, 3000)
  },
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      memberType: e.detail.value
    });
    console.log(this.data.memberType)
  }, 
  loginsubmit:function(e){
    var that=this
    console.log(e.detail.value);
    var formdata = e.detail.value;
    var form={
      "phone": formdata.phone,
      "password": formdata.password,
      "memberType": this.data.memberType
    }
    if(this.data.memberType == 0){
      this.showMessage('请选择身份');
    }
    else if (formdata.phone==''){
      this.showMessage('请输入手机号');
    } else if (formdata.password == ''){
      this.showMessage('请输入密码');
    }else{
      ajax(this.data.loginURL).paramters(form).login().then(res => {
        //this.show('登录成功')
        console.log("登陆成功")
        wx.switchTab({
          url: '../../education/home/home',
        })
        WxNotificationCenter.postNotificationName('LOGINGSUCCESS')
        console.log(res)
        // let pages = getCurrentPages();
        // let curPage = pages[pages.length - 1];
        // console.log(pages)
        // pageTo('../reward/reward',{},true) 
       // wx.navigateBack()
        // wx.switchTab({
        //   url: '../reward/reward'
        // })
      })


      
      // wx.request({
      //   url: this.data.loginURL,
      //   method:"POST",
      //   data:{
      //     data:{
      //       "token":"",
      //       "phone": formdata.phone,
      //       "password": formdata.password
      //     }
      //   },success:function(res){
          
      //     if (res.data.respCode == "000"){
      //       wx.setStorageSync('user', res.data.data)
      //       wx.switchTab({
      //         url: '../../education/home/home',
      //       })
      //     }else{
      //       that.showMessage("账户名或密码错误");
      //       return false;
      //     }
      //   }
      // })
    }
  },
  /**app.globalData.usertype,
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