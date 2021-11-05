import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { plugin as Slicksort } from 'vue-slicksort';
createApp(App).use(store).use(router).use(Slicksort).mount('#app')
