<script setup>
import { h, ref } from 'vue'
import { NInput, NInputNumber, NSelect, NDivider, NForm, NFormItem, NButton, useMessage } from "naive-ui"
import { ArrowDownToLine, Save } from 'lucide-vue-next'
import btnSearch from '../../../UI/Buttons/ButtonSearch/ButtonSearch.vue'
import btnFunction from '../../../UI/Buttons/ButtonAction/ButtonAction.vue'
import CustomTable from "../../../UI/CustomTable/CustomTable.vue"
import { useConfig } from "./config"

const { columns1, pagination1, columns2, dataSalida, value, selEstados, selFamilia, selMaquina, selParcial } = useConfig()

const data = ref([])
const Cantidad = ref(10)

async function obtenerDatosTabla() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + Cantidad.value)
    const responseData = await res.json()
    data.value = responseData.results
}

/* NOTIFICACIONES */
const message = useMessage()
function handleClick() {
    message.success('Hello')
}

/* UTILIDADES */
const countGraphemes = (s) => {
    return Array.from(s).length
}

function selectArticle() {
    console.log('selectArticle')
}

</script>

<template>
    <div class="ComponentGeneral">

        <div class="header">
            <btnSearch v-model:Cantidad="Cantidad" @click="obtenerDatosTabla" />
        </div>

        <CustomTable :columns="columns1" :data="data" :pagination="pagination1" />

        <div class="formContainer">
            <div class="form">

                <!-- FILA PRINCIPAL -->
                <n-form label-placement="top">
                    <div class="form-row">

                        <n-form-item label="Descripción">
                            <n-input style="width: 160px;" placeholder="Ingrese la descripción" />
                        </n-form-item>

                        <n-form-item label="Cantidad">
                            <n-input-number style="width: 100px;" placeholder="Ingrese la cantidad" />
                        </n-form-item>

                        <n-form-item label="OT">
                            <n-input style="width: 120px;" placeholder="# OT" />
                        </n-form-item>

                        <n-form-item label="Estatus">
                            <n-select v-model:value="value" :options="options" style="width: 120px;" />
                        </n-form-item>

                        <n-form-item label="Estado">
                            <n-select v-model:value="value" :options="selEstados" style="width: 120px;" />
                        </n-form-item>

                        <n-form-item label="Nombre">
                            <n-input style="width: 160px;" />
                        </n-form-item>


                        <n-form-item label="Familia">
                            <n-select v-model:value="value" :options="selFamilia" style="width: 150px;" />
                        </n-form-item>

                        <n-form-item label="Máquina">
                            <n-select v-model:value="value" :options="selMaquina" style="width: 150px;" />
                        </n-form-item>

                        <n-form-item label="Parcial">
                            <n-select v-model:value="value" :options="selParcial" style="width: 120px;" />
                        </n-form-item>

                        <n-form-item label="Comentario">
                            <n-input style="width: 180px;" show-count :maxlength="100"
                                     :count-graphemes="countGraphemes" />
                        </n-form-item>

                        <!-- BOTÓN INTEGRADO EN LA FILA -->
                        <div class="form-item-button">
                            <n-button type="tertiary" @click="handleClick" size="large">
                                <ArrowDownToLine />
                            </n-button>
                        </div>
                    </div>
                </n-form>
            </div>
        </div>

        <!-- SEGUNDA TABLA -->
        <CustomTable :columns="columns2" :data="dataSalida" />

        <div class="table-footer">
            <NButton type="primary" @click="console.log('Agregar')">
                <Save />
            </NButton>
        </div>
    </div>
</template>

<style scoped>
.ComponentGeneral {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* CONTENEDOR */
.formContainer {
    width: 95%;
    /*  margin: 5px auto; */
    padding: 15px;
    background-color: var(--color-bg-page);
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: var(--color-shadow-default);
}

/* FORM */
.form {
    width: 100%;
}

/* FILA HORIZONTAL */
.form-row {
    display: flex;
    flex-wrap: nowrap;
    /* Regresado a una sola fila */
    gap: 10px;
    align-items: flex-end;
    overflow-x: auto;
    /* Permitir scroll horizontal si es necesario */
    padding-bottom: 12px;
}

/* Scrollbar styling for a cleaner look */
.form-row::-webkit-scrollbar {
    height: 6px;
}

.form-row::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
}

/* QUITAR ESPACIO EXTRA */
.form-row :deep(.n-form-item) {
    margin-bottom: 0;
    flex-shrink: 0;
    /* Evitar que los inputs se encojan demasiado */
}

/* CONTENEDOR DEL BOTÓN */
.form-item-button {
    margin-bottom: 0;
    padding-bottom: 24px;
    flex-shrink: 0;
    display: flex;
    gap: 10px;
}

/* DIVIDER */
.mi-divider {
    width: 60%;
    margin: 15px auto;
    opacity: 0.6;
}

.form-item-button button {
    width: 40px;
    height: 40px;
    font-size: 0.1rem;
    padding: 4px;
}

.table-footer {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    width: 95%;
    /*  margin: 5px auto; */
    padding: 10px;
    background-color: var(--color-bg-page);
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: var(--color-shadow-default);
    margin-bottom: 5px;
}
</style>