import { createApp } from 'vue'
import App from './App.vue'

import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


createApp(App).mount('#app')
