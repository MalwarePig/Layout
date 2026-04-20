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
    justify-content: center;
    gap: 10px;
    width: 500px;
    height: 50px;
    background-color: var(--color-bg-page);
    border-radius: 10px;
    padding: 10px;
    margin-top: 5px;
    box-shadow: var(--color-shadow-default);
    border: 1px solid var(--color-border-strong);
}

input {
    background-color: var(--color-bg-page);
    padding-inline: 20px;
}

button {
    font-size: 0.1rem;
    padding: 5px;
}
</style>