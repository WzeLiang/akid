// export const BaseURL = 'https://dsabc.dev.sudaotech.com';
export const BaseURL = 'http://192.168.212.29:9093';
import { $wuxDialog, $wuxLoading, $wuxToptips } from '../templates/index';
import { pageTo } from '../utils/utils';



Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

class RequestApiHandler {

  baseURL = BaseURL;   // 基地址
  method = "GET"; // 请求方式
  data = {};      // 请求参数
  path = "";      // 请求路径

  constructor(path, baseURL = BaseURL) {
    this.path = path;
    this.baseURL = baseURL;
  };

  paramters(data = {}) {
    this.data = data;
    return this;
  };

  /*执行网络请求*/
  send(isLogin = false) {

    let path = this.path;
    // if (!path.startsWith('/api/') && !path.startsWith('api/')) {
    //   path = path.startsWith('/') ? `/api/mall${path}` : `/api/mall/${path}`;
    // }
    // let joinPath = path.startsWith('/') ? '' : '/';
    let requestURL = `${this.baseURL}` + path;

    // let requestURL = `${this.baseURL}`

    let userToken = wx.getStorageSync('userToken');
    console.log(userToken)
    return new Promise((resolve, reject) => {
      this.data = userToken ? Object.assign({}, this.data, { "userToken": userToken }):this.data
      var datas={
        data:this.data
      }
      wx.request({
        url: requestURL,
        method: this.method,
        data: datas,
        header: {
          'Content-Type': 'application/json',
          'userToken': userToken || ''
        },
        success(result) {
          wx.hideNavigationBarLoading();
          let data = result.data;
          //console.log(result)
          if (result.data.respCode == "000") {
            console.log("已经登录")
            if (isLogin) {
              let tokens = result.data.data.userToken;
              let memberType = result.data.data.memberType;
              console.log(tokens)
             // wx.setStorageSync('userInfo', data);
              wx.setStorageSync('userToken', tokens);
              wx.setStorageSync('memberType', memberType);
            }
            resolve(data);
          } else {
            console.log("还未1")
            if (result.data.respCode == "500") {
              console.log("还未222")
               console.log(result)
               wx.navigateTo({
                 url: '../../enroll/login/login',
                  })
              //  $wuxDialog.show({
              //   content: '您还没有登录,请先登录', onCancel() {
              //      $wuxDialog.hide()
              //   }, onConfirm() {
              //      $wuxDialog.hide()
              //     // pageTo('../login/login', {}, true)
              //    
              //    }
              //  })
             }
             else {
               console.log(result.data)
               $wuxToptips.error({ text: result.data })
             }

             reject(result);
          }

        },
        fail(error) {
          reject(error);
        }
      })
    });
  };

  get() {
    this.method = "GET";
    return this.send();
  }

  post(isLogin = false) {
    this.method = "POST";
    return this.send(isLogin);
  }

  login() {
    this.method = "POST";
    return this.send(true);
  }

  delete() {
    this.method = "DELETE";
    return this.send();
  }

  put() {
    this.method = "PUT";
    return this.send();
  }
}

export default function ajax(url) {

  let sendUrl = url;

  for (let i = 1; i < arguments.length; i++) {
    sendUrl = sendUrl.replace(/{\w*}/, arguments[i]);
  }

  return new RequestApiHandler(sendUrl)
}
