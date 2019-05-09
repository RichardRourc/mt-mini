import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$store = store


Vue.config.productionTip = false

App.mpType = 'app'

import location from './components/location.vue';
import search from './components/search.vue';
import fullReduction from './components/full-reduction.vue';

Vue.component('location',location);
Vue.component('search',search);
Vue.component('full-reduction',fullReduction);

const app = new Vue({
    ...App,
    store,
})

app.$mount()
