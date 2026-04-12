<script setup>
import btnSearch from '../../UI/Buttons/ButtonSearch/index.vue'
import { NDataTable } from "naive-ui"
import btnFunction from '../../UI/Buttons/btnFunction/index.vue'
import { h } from "vue"


const columns = [
    {
        title: "Clave",
        key: "clave",
        align: "center",
        width: 100
    },
    {
        title: "Articulo",
        key: "articulo",
        align: "center",
    },
    {
        title: "Cantidad",
        key: "cantidad",
        align: "center",
        width: 100
    },
    {
        title: "Usados",
        key: "usados",
        align: "center",
        width: 100
    },
    {
        title: "Afilados",
        key: "afilados",
        align: "center",
        width: 100
    },
    {
        title: "Ubicacion",
        key: "ubicacion",
        align: "center",
        width: 100
    },
    {
        title: "Seleccionar",
        key: "actions",
        align: "center",
        width: 100,
        render(row) {
            return h(
                btnFunction,
                {
                    size: "small",
                    onClick: () => handleClick(row)
                },
                { default: () => "Ver" }
            )
        }
    }
]

function handleClick(row) {
    console.log(row)
}

const data = [
    {
        clave: "1",
        articulo: "Articulo 1",
        cantidad: 10,
        usados: 5,
        afilados: 3,
        ubicacion: "Ubicacion 1",
        btnFunction: btnFunction
    }, {
        clave: "2",
        articulo: "Articulo 2",
        cantidad: 20,
        usados: 10,
        afilados: 6,
        ubicacion: "Ubicacion 2",
        btnFunction: btnFunction
    }, {
        clave: "3",
        articulo: "Articulo 3",
        cantidad: 30,
        usados: 15,
        afilados: 9,
        ubicacion: "Ubicacion 3",
        btnFunction: btnFunction
    }, {
        clave: "4",
        articulo: "Articulo 4",
        cantidad: 40,
        usados: 20,
        afilados: 12,
        ubicacion: "Ubicacion 4",
        btnFunction: btnFunction
    }, {
        clave: "5",
        articulo: "Articulo 5",
        cantidad: 50,
        usados: 25,
        afilados: 15,
        ubicacion: "Ubicacion 5",
        btnFunction: btnFunction
    }, {
        clave: "6",
        articulo: "Articulo 6",
        cantidad: 60,
        usados: 30,
        afilados: 18,
        ubicacion: "Ubicacion 6",
        btnFunction: btnFunction
    }, {
        clave: "7",
        articulo: "Articulo 7",
        cantidad: 70,
        usados: 35,
        afilados: 21,
        ubicacion: "Ubicacion 7",
        btnFunction: btnFunction
    }, {
        clave: "8",
        articulo: "Articulo 8",
        cantidad: 80,
        usados: 40,
        afilados: 24,
        ubicacion: "Ubicacion 8",
        btnFunction: btnFunction
    }, {
        clave: "9",
        articulo: "Articulo 9",
        cantidad: 90,
        usados: 45,
        afilados: 27,
        ubicacion: "Ubicacion 9",
        btnFunction: btnFunction
    }, {
        clave: "10",
        articulo: "Articulo 10",
        cantidad: 100,
        usados: 50,
        afilados: 30,
        ubicacion: "Ubicacion 10",
        btnFunction: btnFunction
    }, {
        clave: "11",
        articulo: "Articulo 11",
        cantidad: 110,
        usados: 55,
        afilados: 33,
        ubicacion: "Ubicacion 11",
        btnFunction: btnFunction
    }, {
        clave: "12",
        articulo: "Articulo 12",
        cantidad: 120,
        usados: 60,
        afilados: 36,
        ubicacion: "Ubicacion 12",
        btnFunction: btnFunction
    }, {
        clave: "13",
        articulo: "Articulo 13",
        cantidad: 130,
        usados: 65,
        afilados: 39,
        ubicacion: "Ubicacion 13",
        btnFunction: btnFunction
    }, {
        clave: "14",
        articulo: "Articulo 14",
        cantidad: 140,
        usados: 70,
        afilados: 42,
        ubicacion: "Ubicacion 14",
        btnFunction: btnFunction
    }, {
        clave: "15",
        articulo: "Articulo 15",
        cantidad: 150,
        usados: 75,
        afilados: 45,
        ubicacion: "Ubicacion 15",
        btnFunction: btnFunction
    }, {
        clave: "16",
        articulo: "Articulo 16",
        cantidad: 160,
        usados: 80,
        afilados: 48,
        ubicacion: "Ubicacion 16",
        btnFunction: btnFunction
    }, {
        clave: "17",
        articulo: "Articulo 17",
        cantidad: 170,
        usados: 85,
        afilados: 51,
        ubicacion: "Ubicacion 17",
        btnFunction: btnFunction
    }, {
        clave: "18",
        articulo: "Articulo 18",
        cantidad: 180,
        usados: 90,
        afilados: 54,
        ubicacion: "Ubicacion 18",
        btnFunction: btnFunction
    }, {
        clave: "19",
        articulo: "Articulo 19",
        cantidad: 190,
        usados: 95,
        afilados: 57,
        ubicacion: "Ubicacion 19",
        btnFunction: btnFunction
    }, {
        clave: "20",
        articulo: "Articulo 20",
        cantidad: 200,
        usados: 100,
        afilados: 60,
        ubicacion: "Ubicacion 20",
        btnFunction: btnFunction
    }
]

const pagination = {
    pageSize: 10
}

</script>
<template>
    <div class="ComponentGeneral">
        <div class="header">
            <btnSearch />
        </div>

        <div class="tableContainer">
            <n-data-table :columns="columns" :data="data" flex-height striped :pagination="pagination" />
        </div>

        <div class="formContainer">

        </div>


    </div>
</template>
<style scoped>
.ComponentGeneral {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0;
}

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