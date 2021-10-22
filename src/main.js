import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";

import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
import * as VeeValidate from "vee-validate";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/style.scss";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
