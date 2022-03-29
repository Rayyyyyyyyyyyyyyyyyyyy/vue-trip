import SvgIcon from "@/components/SvgIcon.vue";

const componentPlugin: any = {
  install: function (vue: any, options: any) {
    if (
      options &&
      options.imports &&
      Array.isArray(options.imports) &&
      options.imports.length > 0
    ) {
      // 按需引入图标
      const { imports } = options;
      imports.forEach((name: any) => {
        console.log("scanned icons: ", `@/assets/icon/${name}.svg`)
        require(`@/assets/icon/${name}.svg`);
      });
    } else {
      const ctx = require.context("@/assets/icon", false, /\.svg$/);
      ctx.keys().forEach(path => {
        const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/);
        if (!temp)
            console.log("icon not found:", path);
        if (!temp) return;
        const name = temp[1];
        console.log("found icon:", path, name);
        require(`@/assets/icon/${name}.svg`);
      });
    }
    vue.component(SvgIcon.name, SvgIcon);
  }
};
export default componentPlugin;
