
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(Vuetify)
Vue.use(VueCompositionAPI)
Vue.component('welcome-component', require('./components/WelcomeComponent.vue').default)

const app = new Vue({
    vuetify: new Vuetify(),
    el: '#app',
})
