import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Container from "./components/Container.vue";

Vue.config.productionTip = false;

Vue.component("app-footer", Footer);
Vue.component("app-header", Header);
Vue.component("app-container", Container);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
