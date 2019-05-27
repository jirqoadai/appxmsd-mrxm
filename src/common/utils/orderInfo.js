import device from './device';

let orderInfo = {
  Name: '', //名称
  Birthday: '', //生日
  Sex: false, // 性别 默认false 女; true男
  GLBirthday: '', //	公历生日
  birthtimeHour: '', //出生时辰
  Long: '', //出生城市经度
  Lat: '', //出生城市纬度
  birthdaycity: '', //出生城市
  goodsId: '6E6ADD294CDA41778727F3EB071BEB11',
  parterid: 'wnlzx', //商户id
  ClientType: device.ios ? 'Youloft_IOS' : 'Youloft_Android', //平台名称	可取值，Youloft_IOS（默认），Youloft_Android
  ordertype: 0, // 订单类型 0 测自己 1 看别人
  pToken: '', //android推送token
  Token: '', //ios推送token
  userId: '', //登录用户编号
  deviceId: '', //设备编号
  idfa: '', //广告标识符
  DeviceMac: '', //mac
  ImeiNumber: '', //imei
  sysversion: device.sysVersion, //系统版本号
  appversion: device.appVersion, //app版本号
  boundId: '', //包名
  channel: device.ios ? 'wnl_ios' : 'wnl_android',	//渠道编号
  TotalFee: 36,
  orderName: '命中另一半',
  posId: '',
  couponId: '',
  openId: '',
  orderId: '',
  // orderName: '命中另一半',
  //   couponId: '',//优惠码
  //   posId: '',
  //   imei: '',
  // HomePageUrl: window.location.href,
  // DetailsUrl: window.location.href.replace(/index/ig, 'result')
  DetailsUrl: '',
  HomepageUrl: window.location.href,
  UnpayUrl: ''
}

export default orderInfo;
