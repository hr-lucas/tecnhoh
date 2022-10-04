import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LoadingPage from "./components/Loading";

Vue.config.productionTip = false;

Vue.component("LoadingPage", LoadingPage);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
