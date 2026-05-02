<script setup>
import { h, ref, watch } from 'vue'
import { NInput, NInputNumber, NSelect, NDivider, NForm, NFormItem, NButton, useMessage, NAutoComplete } from "naive-ui"
import { Box, Layers, Clock, FileText, ArrowDownToLine, Save, ArrowRightToLine, Eraser } from 'lucide-vue-next'
import btnSearch from '../../../UI/Buttons/ButtonSearch/ButtonSearch.vue'
import CustomTable from "../../../UI/CustomTable/CustomTable.vue"
import { useConfig } from "./config"
import Kpis from '../../../UI/Cards/Kpis/Kpis.vue'

const { columnsTable, paginationTable, selEstados, selFamilia, selMaquina, selParcial } = useConfig(onDeleteRow)
const dataTable = ref([]) // datos de la tabla 
const valEstatus = ref(null) // valor del select estatus
const valEstado = ref(null) // valor del select estado 
const valPersonal = ref([]) // valor del select personal
const busquedaPadre = ref("") // valor del input search
const valTotalRegistros = ref(0) // valor del total de registros en la tabla
let timeout = null // timeout para debounce y no buscar en cada key
let searchResultsOptions = ref([]) // options del autocomplete

const formValues = ref({
    id: "",
    nombre: "",
    descripcion: "",
    cantidad: 0,
    ot: "",
    estatus: "",
    estado: "",
    responsable: "",
    comentario: "",
    selFamilia: "",
    selMaquina: "",
    selParcial: "",
})

function onDeleteRow(row) {
    dataTable.value = dataTable.value.filter((item) => item.id !== row.id);
}

watch(busquedaPadre, (newValue) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        if (!newValue) return
        obtenerDatosTabla(newValue)
    }, 1000)
})

async function obtenerDatosTabla(newValue) {
    if (!newValue) return
    const res = await fetch('http://localhost:3000/search?q=' + newValue.toLowerCase())

    if (!res.ok) {
        console.log('No encontrado')
        return
    }

    const responseData = await res.json()
    searchResultsOptions.value = []
    responseData.results.map((item) => {
        /* Llenado de options para el autocomplete */
        searchResultsOptions.value.push({
            label: item.Nombre,
            value: {
                id: item.id,
                Nombre: item.Nombre,
                Descripcion: item.Descripcion,
            }
        })
    })
}

/* NOTIFICACIONES */
const message = useMessage()
function handleClick() {
    message.success('Hello')
}

/* UTILIDADES mostrar contador en input */
const countGraphemes = (s) => {
    return Array.from(s).length
}


function getForm(val) {
    formValues.value.id = val.id
    formValues.value.nombre = val.Nombre
    formValues.value.descripcion = val.Descripcion
    formValues.value.cantidad = val.Cantidad
    formValues.value.estatus = val.Estatus
    formValues.value.estado = val.Estatus
    formValues.value.comentario = val.comentario
    formValues.value.selFamilia = val.selFamilia
    formValues.value.selMaquina = val.selMaquina
    formValues.value.selParcial = val.selParcial
}

watch(() => formValues.value.responsable, (newValue) => {
    if (newValue) {
        getPersonal(newValue)
    } else {
        valPersonal.value = []
    }
})

async function getPersonal(newValue) {
    const res = await fetch('http://localhost:3000/personal?q=' + newValue.toLowerCase())
    const responseData = await res.json()
    valPersonal.value = responseData.results.map(persona => ({
        label: persona.Nombre + ' (' + persona.Planta + ')',
        value: persona
    }))
}

const handleResponsableSelect = (val) => {
    formValues.value.responsable = val.Nombre
}


function addToList() {
    // Detectar si no han buscado una herramienta principal
    if (!formValues.value.id || !formValues.value.nombre) {
        message.error('Por favor busca y selecciona una herramienta primero')
        return
    }

    //  Detectar si falta llenar algún campo usando un bucle
    const camposObligatorios = [
        { clave: 'cantidad', nombre: 'Cantidad' },
        { clave: 'ot', nombre: 'OT / Orden' },
        { clave: 'responsable', nombre: 'Responsable' }
    ]

    for (const campo of camposObligatorios) {
        const valor = formValues.value[campo.clave]
        // Comprobamos si no existe, si es texto vacío, o si es un número 0
        if (!valor || (typeof valor === 'string' && valor.trim() === '') || valor === 0) {
            message.error(`Falta llenar el campo: ${campo.nombre}`)
            return // Detiene la función al primer campo vacío que encuentre
        }
    }

    // Detectar si el ítem ya existe en la tabla usando su ID
    const yaExiste = dataTable.value.some(item => item.id === formValues.value.id)
    if (yaExiste) {
        message.error('Ya existe en la lista')
        return
    }

    dataTable.value.push({
        id: formValues.value.id,
        Nombre: formValues.value.nombre,
        Descripcion: formValues.value.descripcion,
        Cantidad: formValues.value.cantidad,
        Estatus: formValues.value.estatus,
        selFamilia: formValues.value.selFamilia,
        selMaquina: formValues.value.selMaquina,
        selParcial: formValues.value.selParcial,
        Responsable: formValues.value.responsable,
        comentario: formValues.value.comentario
    })
    valTotalRegistros.value++
    message.success('Herramienta agregada a la lista')
}

function clearForm() {
    formValues.value.id = ""
    formValues.value.nombre = ""
    formValues.value.descripcion = ""
    formValues.value.cantidad = 0
    formValues.value.ot = ""
    formValues.value.estatus = ""
    formValues.value.estado = ""
    formValues.value.responsable = ""
    formValues.value.comentario = ""
    formValues.value.selFamilia = ""
    formValues.value.selMaquina = ""
    formValues.value.selParcial = ""
}
</script>

<template>
    <div class="ComponentGeneral">
        <!-- KPI CARDS -->
        <div class="Cards">
            <Kpis skin="violet" label="Entradas hoy" val="12" sub="↑ 3 vs ayer" :icon="Box" />
            <Kpis skin="teal" label="Herramientas activas" val="247" sub="4 con stock bajo" :icon="Layers" />
            <Kpis skin="amber" label="Pendientes" val="5" sub="Por confirmar" :icon="Clock" />
            <Kpis skin="blue" label="OTs activas" val="8" sub="Esta semana" :icon="FileText" />
        </div>

        <!-- CUERPO PRINCIPAL -->
        <div class="Cuerpo">
            <!-- COLUMNA IZQUIERDA: BUSCADOR Y FORMULARIO -->
            <div class="Contenedor-izquierdo">
                <!-- BUSCADOR -->
                <div class="crm-card Buscador" style="padding: 8px 12px;">
                    <div class="card-header-mini" style="margin-bottom: 6px;">
                        <span class="step-dot">1</span>
                        <span class="card-title-mini">Buscar Herramienta</span>
                    </div>
                    <div class="search-box">
                        <btnSearch v-model:busquedaHijo="busquedaPadre" :options="searchResultsOptions"
                            @select="handleSelect" @setForm="getForm" />
                    </div>
                </div>

                <!-- FORMULARIO -->
                <div class="crm-card Formulario">
                    <div class="card-header-mini">
                        <span class="step-dot">2</span>
                        <span class="card-title-mini">Detalle de Salida</span>
                    </div>
                    <n-form label-placement="top" class="form-grid" :show-feedback="false" size="small">
                        <n-form-item label="Nombre" class="full-width">
                            <n-input placeholder="..." :value="formValues.nombre" />
                        </n-form-item>
                        <n-form-item label="Descripción" class="full-width">
                            <n-input placeholder="..." :value="formValues.descripcion" />
                        </n-form-item>
                        <n-form-item label="Cantidad">
                            <n-input-number placeholder="0" v-model:value="formValues.cantidad" />
                        </n-form-item>
                        <n-form-item label="OT / Orden">
                            <n-input placeholder="# OT" v-model:value="formValues.ot" />
                        </n-form-item>

                        <n-divider dashed class="full-width" style="margin: 0;" />

                        <n-form-item label="Familia">
                            <n-select v-model:value="formValues.selFamilia" :options="selFamilia"
                                placeholder="Seleccionar..." />
                        </n-form-item>
                        <n-form-item label="Máquina">
                            <n-select v-model:value="formValues.selMaquina" :options="selMaquina"
                                placeholder="Seleccionar..." />
                        </n-form-item>
                        <n-form-item label="Estatus">
                            <n-select v-model:value="valEstatus" :options="selEstados" placeholder="Seleccionar..." />
                        </n-form-item>
                        <n-form-item label="Estado">
                            <n-select v-model:value="valEstado" :options="selEstados" placeholder="Seleccionar..." />
                        </n-form-item>
                        <n-form-item label="Responsable" class="full-width">
                            <n-auto-complete placeholder="Escribe un nombre..." v-model:value="formValues.responsable"
                                :options="valPersonal" @select="handleResponsableSelect" />
                        </n-form-item>
                        <n-form-item label="Comentario" class="full-width">
                            <n-input placeholder="..." show-count :maxlength="100"
                                v-model:value="formValues.comentario" />
                        </n-form-item>
                    </n-form>
                    <div class="form-actions">
                        <n-button ghost type="error" @click="clearForm" size="medium" style="flex: 1">
                            <template #icon>
                                <Eraser />
                            </template>
                            Limpiar Formulario
                        </n-button>

                        <n-button type="info" ghost @click="addToList" size="medium" style="flex: 1">
                            <template #icon>
                                <ArrowRightToLine />
                            </template>
                            Agregar a la lista
                        </n-button>
                    </div>
                </div>
            </div>

            <!-- COLUMNA DERECHA: TABLA DE REGISTROS -->
            <div class="Contenedor-derecho">
                <div class="crm-card Tablas">
                    <div class="card-header-mini">
                        <span class="step-dot">3</span>
                        <span class="card-title-mini">Registros de esta sesión</span>
                    </div>
                    <div class="table-wrapper">
                        <CustomTable :columns="columnsTable" :dataTable="dataTable" :pagination="paginationTable" />
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER DE ACCIONES -->
        <div class="Contenedor-inferior">
            <div class="footer-info">
                <span>Sesión actual: <strong>{{ valTotalRegistros }} registros</strong></span>
            </div>
            <div class="footer-btns">
                <n-button secondary @click="console.log('Limpiar')">Limpiar</n-button>
                <n-button type="primary" @click="console.log('Guardar')">
                    <template #icon>
                        <Save />
                    </template>
                    Guardar Sesión
                </n-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ComponentGeneral {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    background-color: var(--color-bg-page);
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
}

/* KPI CARDS */
.Cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    width: 100%;
    flex-shrink: 0;
}


/* CUERPO PRINCIPAL */
.Cuerpo {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* Misma cuadrícula exacta que arriba */
    gap: 16px;
    flex-grow: 1;
    min-height: 0;
    width: 100%;
}

.Contenedor-izquierdo {
    grid-column: span 1;
    /* Ocupa exactamente 1 columna */
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
}

.crm-card {
    background: var(--color-bg-surface);
    border-radius: 12px;
    border: 1px solid var(--color-border-default);
    padding: 14px;
    box-shadow: var(--color-shadow-default);
}

.Buscador {
    flex-shrink: 0;
}

.Formulario {
    flex: 1;
    /* Crece para llenar el espacio vertical */
    display: flex;
    flex-direction: column;
    min-height: 0;
}

.card-header-mini {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    flex-shrink: 0;
}

.step-dot {
    width: 18px;
    height: 18px;
    background: var(--color-accent-default);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
}

.card-title-mini {
    font-size: 12px;
    font-weight: 700;
    color: var(--color-text-primary);
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 8px !important;
    align-content: start;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding-right: 4px;
}




.full-width {
    grid-column: 1 / span 2;
}

.form-actions {
    margin-top: 12px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.Contenedor-derecho {
    grid-column: span 3;
    /* Ocupa exactamente las 3 columnas restantes */
    height: 100%;
    min-height: 0;
}

.Tablas {
    height: 100%;
    display: flex;
    flex-direction: column;
}


.table-wrapper {
    flex: 1;
    overflow: hidden;
    padding-bottom: 10px;
}

/* FOOTER */
.Contenedor-inferior {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border-default);
    border-radius: 12px;
    box-shadow: var(--color-shadow-default);
    flex-shrink: 0;
}

.footer-info {
    font-size: 12px;
    color: var(--color-text-secondary);
}

.footer-btns {
    display: flex;
    gap: 10px;
}
</style>
