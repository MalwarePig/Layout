<script setup>
import { Search } from 'lucide-vue-next';
import { NAutoComplete } from "naive-ui"
import { watch } from 'vue';

const busquedaHijo = defineModel('busquedaHijo')
const options = defineModel('options')

console.log(busquedaHijo.value)

const emit = defineEmits(['setForm'])

const handleSelect = (val) => {
    console.log('El nombre es:', val)
    emit('setForm', val)
}

</script>


<template>
    <div class="header-buttons">
        <n-auto-complete class="input-search" v-model:value="busquedaHijo" :options="options"
            placeholder="Escribe un producto..." clearable @select="handleSelect" />
        <button class="btn btn-outline">
            <Search />
        </button>
    </div>
</template>
<style scoped>
.header-buttons {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 38px;
    background-color: var(--color-bg-page);
    border-radius: 8px;
    padding: 4px 8px;
    box-sizing: border-box;
    border: 1px solid var(--color-border-default);
}



:deep(.n-auto-complete .n-input) {
    height: 100%;
    background: transparent;
    border: 1px solid var(--color-border-strong);
}

:deep(.n-auto-complete .n-input-wrapper) {
    height: 100%;
    display: flex;
    align-items: center;
}

:deep(.n-auto-complete .n-input__input-el) {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
}

button {
    font-size: 0.1rem;
    padding: 2px 2px;
}
</style>