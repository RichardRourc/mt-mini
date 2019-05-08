import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import location from './components/location.vue';
import search from './components/search.vue';
import fullRedution from './components/full-redution.vue';
Vue.component('location',location);
Vue.component('search',search);
Vue.component('full-redution',fullRedution);

const app = new Vue({
    ...App,
})

app.$mount()
