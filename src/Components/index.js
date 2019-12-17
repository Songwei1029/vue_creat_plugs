import BallScroll from './BallScroll/index.vue';
const sw_vue_plugs = {
  install(Vue, options) {
    Vue.component(BallScroll.name, BallScroll);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.sw_vue_plugs = sw_vue_plugs;
  Vue.use(sw_vue_plugs);
};
export default sw_vue_plugs;
