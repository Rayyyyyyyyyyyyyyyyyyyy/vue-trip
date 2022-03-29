const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
const path = require("path");
const resolve = path.resolve;

module.exports = defineConfig({
  transpileDependencies: true,
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
