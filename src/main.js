import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import store from './store';

library.add(faCaretDown, faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
