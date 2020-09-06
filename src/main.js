import Vue from "vue";
import Loading from "vue-loading-overlay";
import $ from "jquery";
window.$ = $;
import "vue-loading-overlay/dist/vue-loading.css"; 
import "slick-carousel/slick/slick.css";
import "@/styles/style.scss";
import "bootstrap/dist/js/bootstrap.js";
import * as VeeValidate from "vee-validate";
import zh from "@/lang/zh_TW.js";
import { required, email, min } from "vee-validate/dist/rules";

// No message specified.
VeeValidate.extend("email", email);
VeeValidate.extend("required", required);
VeeValidate.extend("min", min);

// VeeValidate語系包
VeeValidate.localize("tw", zh);

// VeeValidate custom class
VeeValidate.configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});
Vue.component("ValidationProvider", VeeValidate.ValidationProvider);
Vue.component("ValidationObserver", VeeValidate.ValidationObserver);

import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";

Vue.component("Loading", Loading);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// event bus
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
