<script setup>
import { appStore } from '../store.js';
import { ref } from 'vue';
import { usePageHeadlineStore } from '@/stores/pageHeadline';
import {useDataTallyStore} from '@/stores/dataTally';
import SelectBox from './../components/SelectBox.vue';
import DataChart from '../components/DataChart.vue';

const chartDataStore = useDataTallyStore(appStore);
const headlineStore = usePageHeadlineStore(appStore);

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
    :view="view"
    :section="headlineStore.getSection(view)"
    :heading="headlineStore.getHeading(view)"
    :paragraph="headlineStore.getParagraph(view)"
    :button="headlineStore.getButton(view)">
    <SelectBox :view="view" :handleOptionSubmit="handleOptionSubmit"/>
</slot-headline-block>
<div :class = "headlineStore.getDiv(view).class">
    <DataChart :view = "view" :key="componentKey"/>
</div>
</template>