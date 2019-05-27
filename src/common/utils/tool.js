export function formatDate(date, fmt) {
  let dateFormateObj = {
    'M+': date.getMonth() + 1, //月份
    'D+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  Object.keys(dateFormateObj).forEach((key) => {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ?
          dateFormateObj[key] :
          ('00' + dateFormateObj[key]).substr(('' + dateFormateObj[key]).length)
      );
    }
  });
  return fmt;
}
export function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}
export function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  var context = '';
  if (r != null)
    context = r[2];
  reg = null;
  r = null;
	return context == null || context == '' || context == 'undefined' ? '' : context; //eslint-disable-line
}

export function getQueryStringArgs(url) {

  var qs = url.split('?')[1];
  var args = {};
  if (qs) {
    var items = qs.length ? qs.split('&') : [];
    var name = null;
    var value = null;
    var i = 0;
    var len = items.length;
    for (i = 0; i < len; i++) {
      let item = items[i].split('=');

      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);

      if (value.indexOf('#') > -1 || value.indexOf('#/') > -1) {
        value = value.split('#')[0];
      }
      if (name.length) {
        args[name] = value;
      }
    }
  }
  return args;
}

export function stringify(obj) {
  var str = '';
  var keys = Object.keys(obj);
  keys.forEach(function (v, k, arr) {
    k < arr.length - 1 ?
      str += v + '=' + obj[v] + '&' :
      str += v + '=' + obj[v]
  });
  return str;
}

export function isIphoneX() {
  // top 44px bottom 34px
  var w = window;
  var ua = w.navigator.userAgent;
  var dpr = w.devicePixelRatio;
  var sw = w.screen.width;
  var sh = w.screen.height;
  // iPhone X、iPhone XS
  var isIPhoneX = /iphone/gi.test(ua) && dpr === 3 && sw === 375 && sh === 812;
  // iPhone XS Max
  var isIPhoneXSMax = /iphone/gi.test(ua) && dpr === 3 && sw === 414 && sh === 896;
  // iPhone XR
  var isIPhoneXR = /iphone/gi.test(ua) && dpr === 2 && sw === 414 && sh === 896;
  return isIPhoneX || isIPhoneXSMax || isIPhoneXR;
}

export function fixIphoneX(buttonHeight, showButton = true) {
  if (!showButton) {
    document.querySelector('.wnl_history_btn').style.display = 'none';
    return;
  } else {
    document.querySelector('.wnl_history_btn').style.display = 'block';
  }
  if (isIphoneX()) {
    document.querySelector('.wnl_history_btn').style.bottom = buttonHeight > 0 ? `${buttonHeight + 15 + 34}px` : `34px`;
  } else {
    document.querySelector('.wnl_history_btn').style.bottom = buttonHeight > 0 ? `${buttonHeight + 15}px` : `10px`;
  }
}