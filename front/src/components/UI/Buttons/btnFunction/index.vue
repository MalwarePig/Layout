<script setup>
function handleClick() {
    alert("hola")
}
</script>
<template>
    <button @click="handleClick">Click</button>
</template>

<style scoped>
button {
    padding: 5px;
    background: red;
    color: white;
}
</style>