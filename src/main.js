import { createApp } from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import router from "./router/router";
import "@/assets/styles/main.css";


const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

