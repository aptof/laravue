import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { useErrorInterceptor } from './helpers/errorInterceptor';
import { createPinia } from 'pinia';

import './assets/main.css';

const toastOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 5000,
};

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Toast, toastOptions);
useErrorInterceptor();

app.mount('#app');
