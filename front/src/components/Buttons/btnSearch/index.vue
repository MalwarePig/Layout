<script setup>

</script>
<template>
    <div class="header-buttons">
        <input type="text" placeholder="Buscar" class="input-search">
        <button class="btn btn-outline">Outline</button>
    </div>
</template>
<style scoped>
.header-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 500px;
    height: 30px;
    background-color: var(--color-bg-page);
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--color-border-strong);
}

input {
    background-color: var(--color-bg-page);
    padding-inline: 20px;
}
</style>