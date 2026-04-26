<script setup>
import { Search } from 'lucide-vue-next';

const cantidad = defineModel('Cantidad', { type: Number })
</script>
<template>
    <div class="header-buttons">
        <input type="text" placeholder="Buscar" class="input-search" v-model.number="cantidad">
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

.input-search {
    flex-grow: 1;
    border: none;
    background: transparent;
    outline: none;
    color: var(--color-text-primary);
    font-size: 13px;
    padding: 0;
    min-width: 0; /* Permite que el input se encoja si es necesario */
}

button {
    font-size: 0.1rem;
    padding: 5px;
}
</style>