<script setup>
import { NDataTable } from "naive-ui"

/* import { columns, data, pagination } from "./exampleData" */

const props = defineProps({
    data: Array,
    columns: Array,
    pagination: Object
})

console.log(props.data)
console.log(props.columns)
console.log(props.pagination)
</script>

<template>
    <div class="tableContainer">
        <!-- flex-height hace que la tabla se ajuste a la altura del contenedor -->
        <!-- striped hace que las filas de la tabla tengan un color alterno -->
        <n-data-table :columns="columns" :data="data" flex-height striped :pagination="pagination" />
    </div>
</template>

<style scoped>
.tableContainer {
    display: flex;
    width: 95%;
    height: 40%;
    margin: 5px auto;
    padding: 10px;
    background-color: var(--color-bg-page);
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: var(--color-shadow-default);
}

/* css para el header de la tabla */
:deep(.n-data-table-th) {
    background-color: var(--color-bg-page);
    color: var(--color-text-tertiary);
    font-weight: bold;
    padding: 6px 8px;
    line-height: 1.4;
}

/* css para las celdas de la tabla */
:deep(.n-data-table-td) {
    padding: 4px 8px;
    line-height: 1.1;
    border: 1px dashed var(--color-border-default);
}

/* css para el hover de las filas de la tabla */
:deep(.n-data-table .n-data-table-tbody .n-data-table-tr:hover > .n-data-table-td) {
    background-color: #B0B0D0 !important;
    transition: background-color 0.2s ease;
}

/* css para el control de paginacion */
:deep(.n-data-table .n-data-table__pagination) {
    padding-right: 10px;
}
</style>