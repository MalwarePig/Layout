<script setup></script>
<template>
    <div class="tabs-bar">
        <div class="logo">
            <img src="../../../../public/logo/Logo.svg" alt="">
        </div>
        <div class="content">
            <button>Inicio</button>
            <button>Clientes</button>
            <button>Ventas</button>
            <button>Reportes</button>
        </div>
    </div>

</template>
<style scoped>
.tabs-bar {
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    width: 100%;
    border-bottom: 1px solid #ddd;
}

.logo {
    width: 200px;
    background-color: rgb(171, 255, 168);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
}

img {
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
}

.content {
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0 20px;
    flex-grow: 1;
    height: 60px;
    gap: 10px;
}
</style>