import { createApp } from 'vue';
import CanvasJSChart from '@canvasjs/vue-charts';

import App from './App.vue';
import router from './router';

const app = createApp(App)
app.use(CanvasJSChart);
app.use(router);

app.mount('#app');
