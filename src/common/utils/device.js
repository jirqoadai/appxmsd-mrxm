'use strict';
var root = typeof self === 'object' && self.self === self && self ||
	typeof global === 'object' && global.global === global && global ||
	this;

//设备判断
var device = {};

	
var ua = root.navigator.userAgent;

	
var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); //eslint-disable-line

	
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);

	
var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);

	
var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false;
// Android
if (android) {
  device.os = 'android';
  device.osVersion = android[2];
  device.android = true;
  device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
}
if (ipad || iphone || ipod) {
  device.os = 'ios';
  device.ios = true;
}
// iOS
if (iphone && !ipod) {
  device.osVersion = iphone[2].replace(/_/g, '.');
  device.iphone = true;
}
if (ipad) {
  device.osVersion = ipad[2].replace(/_/g, '.');
  device.ipad = true;
}
// iOS 8+ changed UA
if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
  if (device.osVersion.split('.')[0] === '10') {
    device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
  }
}
device.weixin = /MicroMessenger/i.test(ua);
// Pixel Ratio
device.pixelRatio = window.devicePixelRatio || 1;

device.wnl = /wnl/i.test(ua);

device.appVersion = /^\d.*\d$/ig.test(ua.split(' ').pop()) ? ua.split(' ').pop() : '1.0.0';
device.sysVersion = GetIOSVersion() || getAndroidVersion();

// iphoneX/iphoneXS/iphoneXS Max 适配方式相同
device.isIphoneXS = device.ios && window.screen.width >= 375 && window.devicePixelRatio === 3 && window.screen.height > 740;
// iphoneXR
device.isIphoneXR = device.ios && window.screen.width === 414 && window.devicePixelRatio === 2;

device.isIphoneX = device.isIphoneXS || device.isIphoneXR;

function GetIOSVersion() {
  if (window.MSStream) {
    return false;
  }
  var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);

		
  var version;
  if (match !== undefined && match !== null) {
    version = [
      parseInt(match[1], 10),
      parseInt(match[2], 10),
      parseInt(match[3] || 0, 10)
    ];
    return parseFloat(version.join('.'));
  }

  return false;
}

function getAndroidVersion() {
  ua = ua.toLowerCase();
  var match = ua.match(/android\s([0-9\.]*)/); //eslint-disable-line
  return match ? parseFloat(match[1]) : false;
}

export default device;