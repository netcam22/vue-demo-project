<script setup>
import { useHeadlineBannerStore } from '@/stores/headlineBanner';
import { appStore } from '../store.js';
import { ref } from 'vue';
import {useDataTallyStore} from '@/stores/dataTally';
import SelectBox from './../components/SelectBox.vue';
import DataChart from '../components/DataChart.vue';

const chartDataStore = useDataTallyStore(appStore);
const headlineBannerStore = useHeadlineBannerStore(appStore);

defineProps({
    view: {
    type: String,
    required: true
    }
})

const componentKey = ref(0);

const forceRender = () => {
    componentKey.value += 1;
};
function handleOptionSubmit(event) {
    event.preventDefault();
    chartDataStore.$patch(event.target.id, chartDataStore.selected[event.target.id]);
    forceRender();
}
</script>

<template>
<slot-headline-block
    :section="headlineBannerStore.getSection"
    :heading="headlineBannerStore.getHeading"
    :paragraph="headlineBannerStore.getParagraph">
    <SelectBox :view="view" :handleOptionSubmit="handleOptionSubmit"/>
</slot-headline-block>
<div class = "chart-box">
    <DataChart :view = "view" :key="componentKey"/>
</div>
</template>