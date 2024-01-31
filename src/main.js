import { createApp } from 'vue';
import CanvasJSChart from '@canvasjs/vue-charts';
import ChartBlock from './components/ChartBlock.vue';
import HeadlineBlock from '././components/HeadlineBlock.vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('slot-chart-block', ChartBlock);
app.component('slot-headline-block', HeadlineBlock);
app.use(CanvasJSChart);
app.use(router);

app.mount('#app');
