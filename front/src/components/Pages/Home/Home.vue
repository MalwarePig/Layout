<script setup>
import { h, ref } from 'vue'
import btnSearch from '../../UI/Buttons/ButtonSearch/ButtonSearch.vue'
import btnFunction from '../../UI/Buttons/ButtonAction/ButtonAction.vue'
import CustomTable from "../../UI/CustomTable/CustomTable.vue"
var data = ref([])
var Cantidad = ref(10)

async function obtenerDatosTabla() {
    console.log(Cantidad.value);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + Cantidad.value);
    const responseData = await res.json();
    data.value = responseData.results;
    console.log(data.value);

}

const columns = [
    {
        title: "Nombre",
        key: "name",
        align: "center",
        width: 100
    },
    {
        title: "URL",
        key: "url",
        align: "center",
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
                    onClick: () => {
                        console.log(row)
                    }
                },
                { default: () => "Ver" }
            )
        }
    }
]

const pagination = {
    pageSize: 10
}
</script>

<template>
    <div class="ComponentGeneral">
        <div class="header">
            <btnSearch v-model:Cantidad="Cantidad" @click="obtenerDatosTabla" />
        </div>

        <CustomTable :columns="columns" :data="data" :pagination="pagination" />

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
</style>