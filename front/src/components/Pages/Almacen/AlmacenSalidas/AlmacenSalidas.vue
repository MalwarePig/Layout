<script setup>
import { h, ref } from 'vue'
import { NInput, NInputNumber, NSelect, NDivider, NForm, NFormItem, NButton, useMessage } from "naive-ui"
import { Box, Layers, Clock, FileText, ArrowDownToLine, Save } from 'lucide-vue-next'
import btnSearch from '../../../UI/Buttons/ButtonSearch/ButtonSearch.vue'
import btnFunction from '../../../UI/Buttons/ButtonAction/ButtonAction.vue'
import CustomTable from "../../../UI/CustomTable/CustomTable.vue"
import { useConfig } from "./config"

const { columns1, pagination1, columns2, dataSalida, selEstados, selFamilia, selMaquina, selParcial } = useConfig()

const data = ref([])
const Cantidad = ref(10)
const valEstatus = ref(null)
const valEstado = ref(null)

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
        <!-- KPI CARDS -->
        <div class="Cards">
            <div class="kpi kpi-violet">
                <div class="kpi-label">Entradas hoy</div>
                <div class="kpi-val">12</div>
                <div class="kpi-sub">↑ 3 vs ayer</div>
                <div class="kpi-deco"><Box :size="56" /></div>
            </div>
            <div class="kpi kpi-teal">
                <div class="kpi-label">Herramientas activas</div>
                <div class="kpi-val">247</div>
                <div class="kpi-sub">4 con stock bajo</div>
                <div class="kpi-deco"><Layers :size="56" /></div>
            </div>
            <div class="kpi kpi-amber">
                <div class="kpi-label">Pendientes</div>
                <div class="kpi-val">5</div>
                <div class="kpi-sub">Por confirmar</div>
                <div class="kpi-deco"><Clock :size="56" /></div>
            </div>
            <div class="kpi kpi-blue">
                <div class="kpi-label">OTs activas</div>
                <div class="kpi-val">8</div>
                <div class="kpi-sub">Esta semana</div>
                <div class="kpi-deco"><FileText :size="56" /></div>
            </div>
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
                        <btnSearch v-model:Cantidad="Cantidad" @click="obtenerDatosTabla" />
                    </div>
                </div>

                <!-- FORMULARIO -->
                <div class="crm-card Formulario">
                    <div class="card-header-mini">
                        <span class="step-dot">2</span>
                        <span class="card-title-mini">Detalle de Salida</span>
                    </div>
                    <n-form label-placement="top" class="form-grid">
                        <n-form-item label="Descripción">
                            <n-input placeholder="..." />
                        </n-form-item>
                        <n-form-item label="Cantidad">
                            <n-input-number placeholder="0" />
                        </n-form-item>
                        <n-form-item label="OT / Orden">
                            <n-input placeholder="# OT" />
                        </n-form-item>
                        <n-form-item label="Estatus">
                            <n-select v-model:value="valEstatus" :options="selEstados" placeholder="Seleccionar..." />
                        </n-form-item>
                        <n-form-item label="Estado">
                            <n-select v-model:value="valEstado" :options="selEstados" placeholder="Seleccionar..." />
                        </n-form-item>
                        <n-form-item label="Responsable">
                            <n-input placeholder="..." />
                        </n-form-item>
                        <n-form-item label="Comentario" class="full-width">
                            <n-input type="textarea" placeholder="..." show-count :maxlength="100" />
                        </n-form-item>
                    </n-form>
                    <div class="form-actions">
                        <n-button type="primary" @click="handleClick" block size="small">
                            <template #icon><ArrowDownToLine /></template>
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
                        <CustomTable :columns="columns2" :data="dataSalida" />
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER DE ACCIONES -->
        <div class="Contenedor-inferior">
            <div class="footer-info">
                <span>Sesión actual: <strong>{{ dataSalida.length }} artículos</strong></span>
            </div>
            <div class="footer-btns">
                <n-button secondary @click="console.log('Limpiar')">Limpiar</n-button>
                <n-button type="primary" @click="console.log('Guardar')">
                    <template #icon><Save /></template>
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

.kpi {
    border-radius: 12px;
    padding: 20px 24px;
    border: 1px solid;
    position: relative;
    overflow: hidden;
    box-shadow: var(--color-shadow-default);
    min-height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 0.2s ease;
}

.kpi:hover {
    transform: translateY(-2px);
}

.kpi-violet { background: var(--kpi-v-bg); border-color: var(--kpi-v-bd); }
.kpi-teal   { background: var(--kpi-t-bg); border-color: var(--kpi-t-bd); }
.kpi-amber  { background: var(--kpi-a-bg); border-color: var(--kpi-a-bd); }
.kpi-blue   { background: var(--kpi-b-bg); border-color: var(--kpi-b-bd); }

.kpi-label { 
    font-size: 11px; 
    font-weight: 700; 
    text-transform: uppercase; 
    letter-spacing: 0.05em; 
    margin-bottom: 8px; 
}
.kpi-violet .kpi-label { color: var(--kpi-v-lbl); }
.kpi-teal   .kpi-label { color: var(--kpi-t-lbl); }
.kpi-amber  .kpi-label { color: var(--kpi-a-lbl); }
.kpi-blue   .kpi-label { color: var(--kpi-b-lbl); }

.kpi-val { 
    font-size: 32px; 
    font-weight: 700; 
    line-height: 1; 
}
.kpi-violet .kpi-val { color: var(--kpi-v-val); }
.kpi-teal   .kpi-val { color: var(--kpi-t-val); }
.kpi-amber  .kpi-val { color: var(--kpi-a-val); }
.kpi-blue   .kpi-val { color: var(--kpi-b-val); }

.kpi-sub { 
    font-size: 13px; 
    margin-top: 8px; 
    font-weight: 500; 
}
.kpi-violet .kpi-sub { color: var(--kpi-v-lbl); }
.kpi-teal   .kpi-sub { color: var(--kpi-t-lbl); }
.kpi-amber  .kpi-sub { color: var(--kpi-a-lbl); }
.kpi-blue   .kpi-sub { color: var(--kpi-b-lbl); }

.kpi-deco { 
    position: absolute; 
    right: 12px; 
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.2; 
    display: flex;
    align-items: center;
    justify-content: center;
}

.kpi-violet .kpi-deco { color: var(--kpi-v-lbl); }
.kpi-teal   .kpi-deco { color: var(--kpi-t-lbl); }
.kpi-amber  .kpi-deco { color: var(--kpi-a-lbl); }
.kpi-blue   .kpi-deco { color: var(--kpi-b-lbl); }

/* CUERPO PRINCIPAL */
.Cuerpo {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 12px;
    flex-grow: 1;
    min-height: 0;
    width: 100%;
}

.Contenedor-izquierdo {
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
    flex: 1; /* Crece para llenar el espacio vertical */
    display: flex;
    flex-direction: column;
    min-height: 0;
}

.card-header-mini {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
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
    gap: 8px;
    flex: 1; /* Usa el espacio disponible */
    min-height: 0;
}

:deep(.n-form-item) {
    margin-bottom: 4px;
}

:deep(.n-form-item-label) {
    font-size: 11px;
}

.full-width {
    grid-column: 1 / span 2;
}

.form-actions {
    margin-top: auto; /* Anclado al final del card */
    padding-top: 10px;
}

.Contenedor-derecho {
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
}

:deep(.n-data-table) {
    height: 100%;
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



