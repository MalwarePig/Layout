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
        <n-data-table :columns="columns" :data="data" flex-height striped :pagination="pagination" />
    </div>
</template>

<style scoped>
.tableContainer {
    display: flex;
    width: 80%;
    height: 50%;
    margin: 20px auto;
    padding-bottom: 10px;
    background-color: var(--color-bg-page);
    border: 1px solid #ccc;
}

/* css para el header de la tabla */
:deep(.n-data-table-th) {
    background-color: var(--color-bg-page);
    color: var(--color-text-tertiary);
    font-weight: bold;
}

/* css para el control de paginacion */
:deep(.n-data-table .n-data-table__pagination) {
    padding-right: 10px;
}
</style>