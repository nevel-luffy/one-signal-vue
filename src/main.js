import Vue from "vue";
import OneSignal from "onesignal-vue";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(OneSignal);

new Vue({
  render: h => h(App),
  beforeMount() {
    this.$OneSignal.init({
      appId: "32129047-423e-4597-a816-b8bf704f4db9",
      allowLocalhostAsSecureOrigin: true,
    });
  },
}).$mount("#app");
