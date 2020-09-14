module.exports = {
    devServer: {
      port: 8080,
      open: true, //配置自动启动浏览器
      hotOnly: false, // 热更新
      // proxy: {
      //   "/adminapi": {
      //     target: 'http://test5.dongbaoyu.com/adminapi', // target host
      //     ws: true, // proxy websockets
      //     changeOrigin: true, // needed for virtual hosted sites
      //     pathRewrite: {
      //       "^/adminapi": "" // rewrite path
      //     }
      //   }
      // }
    },
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          // @/ 是 src/ 的别名
          // 所以这里假设你有 `src/variables.scss` 这个文件
          // data: `@import "@/styles.scss";`

        },
      
      }
    },
    // 这里就是会修改webpack的outPath.publicPath
    publicPath: "./",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: "static",
    productionSourceMap: false // 生产环境是否生成 SourceMap
  };