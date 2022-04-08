const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
const path = require("path");
const resolve = path.resolve;

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 先刪除預設的svg配置
    config.module.rules.delete("svg")

    // 新增 svg-sprite-loader 設定
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include
      .add(resolve("src/assets/icon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })

    // 修改 images-loader 配置
    // config.module
    //   .rule("images")
    //   .exclude.add(resolve("src/assets/images"))
  },
  configureWebpack: config =>{
    return {
      plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
      ],
      resolve: {
        alias: {
          "~": resolve(__dirname, "src/"),
          "@": resolve(__dirname, "src/")
        }
      }
    }
  },
});
