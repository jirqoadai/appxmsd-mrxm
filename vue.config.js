module.exports = {
  // 部署应用包时的基本 URL, 用法和 webpack 本身的 output.publicPath 一致
  // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')
  // 这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  indexPath: 'index.html',
  lintOnSave: process.env.NODE_ENV === 'production',
  // 生产环境的 source map
  productionSourceMap: false
};
