<script setup></script>
<template>
    <div class="sidebar">
        <h1>Sidebar</h1>
        <div class="barr">
            <ul>
                <li>Dashboard</li>
                <li>Almacenes</li>
                <li>Herramientas</li>
                <li>Calidad</li>
                <li>Producción</li>
                <li>Ventas</li>
                <li>Compras</li>
                <li>Finanzas</li>
                <li>Mantenimiento</li>
                <li>Reportes</li>
                <li>RH</li>
                <li>Configuración</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.sidebar {
    width: 200px;
    height: 100%;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-right: 1px solid #ddd;
}

.barr {
    background-color: #c78aff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-right: 1px solid #ddd;
    border-radius: 18px;

}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

li {
    margin: 0;
    padding: 10px;
    text-align: center;
    cursor: pointer;
}

li:hover {
    background-color: #e0e0e0;
}
</style>