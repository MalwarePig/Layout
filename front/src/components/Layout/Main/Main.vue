<script setup></script>
<template>
    <div class="main-content">
        <h1>Main</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Juan</td>
                    <td>[EMAIL_ADDRESS]</td>
                    <td>123456789</td>
                    <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
.main-content {
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
    padding: 20px;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

button {
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
}
</style>