/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
let date = new Date();

require('./bootstrap');

window.Vue = require('vue').default;
import App from './views/App.vue'
import BootstrapVue from 'bootstrap-vue';
import VueScheduler from 'v-calendar-scheduler';
import 'v-calendar-scheduler/lib/main.css';
Vue.use(BootstrapVue);
Vue.use(VueScheduler, {
    locale: 'sv',
    minDate: null,
    maxDate: null,
    labels: {
        today: date.getDate() + ' ' + date.toLocaleString('sv', { month: 'long' }),
        back: '←',
        next: '→',
        month: 'Månad',
        week: 'Vecka',
        day: 'Dag',
        all_day: 'Heldag'
    },
    availableViews: [],
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: { App }
});
