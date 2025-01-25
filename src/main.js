import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
    // Optional toast configuration
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
};

const app = createApp(App);
app.use(Toast, options);
app.mount('#app');
