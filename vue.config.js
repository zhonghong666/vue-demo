const path = require('path')
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

const resolve = dir => {
  return path.join(__dirname, dir)
}
const env = process.env.NODE_ENV

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,

const BASE_URL = process.env.BASE_URL // 生产环境下本地调试时使用'/'，线上部署应使用线上路径

const config = {
  devServer: {
    port: 8081,
    hot: true
  },
  publicPath: BASE_URL,
  assetsDir: './', // 静态资源目录
  configureWebpack: config => {

    if (env === 'production') {
      config.resolve = {
        alias: {
          '@ant-design/icons/lib/dist$': resolve('./src/core/antd/icons.js'),
          '@': resolve('src')
        }
      }
      config.externals = {
        'jquery': '$',
        'g2': 'G2',
        'data-set': 'DataSet',
      }
      // Begin 生成 gzip 压缩文件
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: productionGzipExtensions,
          threshold: 1024, //对超过10k的数据进行压缩
          deleteOriginalAssets: false, //是否删除源文件
        })
      );
      config.optimization.splitChunks.cacheGroups = {
        'vender-base': {
          name: 'vender-base',
          test: 'vender-base',
          chunks: 'all',
        },
        'vender-exten': {
          name: 'vender-exten',
          test: 'vender-exten',
          chunks: 'all'
        },
        'vender-element': {
          name: 'vender-element',
          test: 'vender-element',
          chunks: 'all',
        }
      }
    } else {
      // config.devtool = '#source-map'
      //测试断点，基于 webpack 打包的 vue 项目， 可能会存在断点不匹配的问题, 还需要做些修改
      config.devtool = 'eval-source-map'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    config.plugin('html').tap(args => {
      args[0].favicon = resolve('public/logo.png')
      return args
    })
    if (env === 'production') { // 生产环境下代码拆分打包
      config.entry('vender-base').add(resolve('src/vendors/vendors.base.js')).end()
      config.entry('vender-exten').add(resolve('src/vendors/vendors.exten.js')).end()
      config.entry('vender-element').add(resolve('src/vendors/vendors.element.js')).end()
    }
    //打包分析
    config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
  css: {
    sourceMap: env === 'development',
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          // 'primary-color': '#F5222D',
          // 'link-color': '#F5222D',
          // 'border-radius-base': '4px'
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 关闭ESLINT
  lintOnSave: false
}

module.exports = config
