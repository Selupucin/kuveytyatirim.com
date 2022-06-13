import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/assets/demo.css";
import "@/assets/bootstrap.min.css";
import VueLazyload from "vue-lazyload";
import VueCarousel from "vue-carousel";

export default {
  install(Vue) {
    Vue.use(VueMaterial);
    Vue.use(VueCarousel);
    Vue.use(VueLazyload);
  }
};
