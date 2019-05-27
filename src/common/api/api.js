import axios from 'axios';

export function getDiscounts() {
  return axios.request('//198.13.41.153:3000/discount');
}

export function createOrder(info) {
  return axios.request('//coco70.51wnl-cq.com/numberologynew/ChartHalf/CreateOrderNew', {
    method: 'post',
    params: info
  })
}
export function getRelevantGoodsList(params) {
  return axios.request('//coco70.51wnl-cq.com/numberologynew/BaseCeSuan/GetRelevantGoodsList?size=8&type=' + params, {
    method: 'get'
  })
}
export function getOrderDetail(info) {
  return axios.request('//coco70.51wnl-cq.com/numberologynew/ChartHalf/GetOrderDetail', {
    method: 'post',
    params: info
  })
}
export function getWnlUserInfo(info) {
  var param = {
    OpenId: info.openid,
    UnionId: info.unionid,
    Gender: info.gender,
    Platform: '2',
    OpenName: info.nickname,
    Desc: '',
    AppId: 'ServiceAccount'
  };
  var data = {
    DataString: JSON.stringify(param)
  }
  console.log(data)
  return axios({
    url: `//u.51wnl-cq.com/Login/OpenLogin?
    cid=Youloft_Android&av=4.2.6&mac=00:11:22:33:44:55&
    idfa=b622c089e7e14d2c2fa8c9129dafbb51&did=b622c089e7e14d2c2fa8c9129dafbb51&chn=wnl_anzhi&cc=CN&lang=zh&bd=com.youloft.calendar`,
    dataType: 'json',
    method: 'POST',
    data: data
  });
}
