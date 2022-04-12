import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import router from "./router";
import "@/assets/styles/tailwind.scss";
import svgIconPlugin from "@/plugins/svgIcon";
import "aos/dist/aos.css";
import dayjs from "dayjs";
import App from "./App.vue"

const app = createApp(App)
app.config.globalProperties.$dayjs = dayjs;
app.use(svgIconPlugin, { imports: [] });
app.use(router)
app.use(ElementPlus)

app.mount("#app")
