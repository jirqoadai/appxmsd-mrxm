import device from './device';
import {
  getQueryStringArgs
} from './tool';
import orderInfo from './orderInfo'
import config from '../utils/config';
import {
  getWnlUserInfo
} from '../api/api'
import axios from 'axios';

export default function login() {
  let urlParams;
  //网页
  if (!device.wnl && !device.weixin) {
    if (decodeURIComponent(window.location.href).indexOf('?') > -1) {
      urlParams = getQueryStringArgs(window.location.href)
      let queryList = getQueryList(urlParams);
      for (let k in queryList) {
        orderInfo[k] = queryList[k];
      }
      console.log(orderInfo)
    }
    if (localStorage.getItem('wnl_tlp_guid')) {
      let userId = localStorage.getItem('wnl_tlp_guid');
      console.log('local wnl_tlp_guid', userId);
      orderInfo.userId = '';
      orderInfo.deviceId = userId;
    } else {
      axios.request('http://coco70.51wnl.com/numberologynew/UniqueID/NewGuid').then((result) => {
        // let userId = result.data.toString();
        let deviceId = result.data.toString();
        console.log('new wnl_tlp_guid', deviceId);
        localStorage.setItem('wnl_tlp_guid', deviceId);
        orderInfo.userId = '';
        orderInfo.deviceId = deviceId;
      })
    }
  }

  //万年历
  if (device.wnl && decodeURIComponent(window.location.href).indexOf('?') > -1) {
    urlParams = getQueryStringArgs(window.location.href);
    let queryList = getQueryList(urlParams);
    for (let k in queryList) {
      orderInfo[k] = queryList[k];
    }
    console.log(queryList);

    console.log(orderInfo)
    let wnl_numerology_history_data = JSON.parse(localStorage.getItem('wnl_numerology_history_data'));
    if (wnl_numerology_history_data) {
      orderInfo.deviceId = wnl_numerology_history_data.deviceId;
      if (wnl_numerology_history_data.userId && wnl_numerology_history_data.userId.length < 32) {
        orderInfo.userId = wnl_numerology_history_data.userId;
      }
    }
  }

  function setGoodsInfo(posId) {
    if (posId) {
      switch (posId) {
        case 'QDMZXP':
          orderInfo.goodsId = '9A079BF8A0CA46009CFC304A92A6A7C4'; //正式环境-往返APP
          orderInfo.TotalFee = 38;
          break;
        case 'qdmzxp':
          orderInfo.goodsId = '9A079BF8A0CA46009CFC304A92A6A7C4'; //正式环境-往返APP
          orderInfo.TotalFee = 38;
          break;
      }
    }
  }

  function getQueryList(query) {
    setGoodsInfo(query.posId);
    return {
      boundId: query.boundId || '',
      channel: query.channel || device.ios ? 'wnl_ios' : 'wnl_android',
      deviceId: query.deviceId || '',
      idfa: query.idfa || '',
      ImeiNumber: query.imei || '',
      DeviceMac: query.mac || '',
      pToken: query.pushToken || '',
      Token: query.pToken || '',
      posId: query.posId || '',
      userId: query.userId || '',
      couponId:query.couponId || ''
    }
  }

  //微信
  if (device.weixin) {
    getOpenId();
  }

  function getOpenId() {
    var urlParams = getQueryStringArgs(window.location.href)
    // for (var k in urlParams) {
    //   orderInfo[k] = urlParams[k];
    // }
    setGoodsInfo(urlParams.posId);
    orderInfo.posId = urlParams.posId || '';
    console.log(orderInfo)
    var wnl_tlp_local = JSON.parse(localStorage.getItem('wnl_tlp_local'));
    if (wnl_tlp_local && wnl_tlp_local.wnlUserId) {
      // console.log('wnl_tlp_local:', wnl_tlp_local);
      orderInfo.userId = wnl_tlp_local.wnlUserId;
      orderInfo.deviceId = '';
      orderInfo.openId = wnl_tlp_local.openid;
      console.log(orderInfo);
      return false
    }
    if (urlParams.openid) {
      // console.log(urlParams)
      orderInfo.openId = urlParams.openid;
      wnl_tlp_local = {}
      wnl_tlp_local.openid = urlParams.openid;
      wnl_tlp_local.unionid = urlParams.unionid;
      wnl_tlp_local.gender = urlParams.sex;
      wnl_tlp_local.openName = decodeURIComponent(urlParams.nickname);
      getWnlUserInfo(wnl_tlp_local).then((res) => {
        // console.log(res)
        wnl_tlp_local.wnlUserId = res.data.data.wnlUserId;
        orderInfo.userId = wnl_tlp_local.wnlUserId;
        orderInfo.deviceId = '';
        localStorage.setItem('wnl_tlp_local', JSON.stringify(wnl_tlp_local));
      })
      return false;
    }
    // else {
    //   // location.href = 'https://b.cqyouloft.com/atcapi/WeChat/WxProcess?reurl=' + encodeURIComponent(window.location.href);
    //   location.href = 'https://b.cqyouloft.com/atcapi/WeChat/WxProcess?reurl=' + encodeURIComponent(config.pageHtml);
    // }
    let url = config.pageHtml;
    if (urlParams.orderId) {
      url = `${window.location.href}`
    }
    location.href = 'https://b.cqyouloft.com/atcapi/WeChat/WxProcess?reurl=' + encodeURIComponent(url);
  }
}
