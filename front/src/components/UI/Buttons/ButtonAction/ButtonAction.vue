<script setup>
const props = defineProps({
    text: String,
    icon: Object
})

/* function handleClick() {
    alert("hola")
} */
</script>
<template>
    <button @click="handleClick">
        <component :is="icon" />
    </button>
</template>

<style scoped>
button {
    padding: 1px;
    margin: 5px;
    color: var(--color-text-primary);
    background-color: var(--color-bg-page);
    border: 1px solid var(--color-border-strong);
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
}
</style>