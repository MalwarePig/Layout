<script setup>
import { ref } from 'vue';

const activeTab = ref(1);

const tabs = ref([
    { id: 1, name: 'Inicio' },
    { id: 2, name: 'Clientes' },
    { id: 3, name: 'Ventas' },
    { id: 4, name: 'Reportes' },
    { id: 5, name: 'Inicio' },
    { id: 6, name: 'Clientes' },
    { id: 7, name: 'Ventas' },
    { id: 8, name: 'Reportes' },
]);
</script>

<template>
    <div class="tabs-bar">
        <!-- Logo Alineado a la Izquierda -->
        <div class="logo">
            <img src="../../../../public/logo/Logo.svg" alt="Logo">
        </div>

        <!-- Tabs Centradas (Estilo Segmented Control Profesional) -->
        <div class="tabs-wrapper">
            <div class="tabs-container">
                <button
                        class="tab"
                        v-for="tab in tabs"
                        :key="tab.id"
                        :class="{ 'active': activeTab === tab.id }"
                        @click="activeTab = tab.id">
                    {{ tab.name }}
                </button>
            </div>
        </div>

        <!-- Acciones a la Derecha -->
        <div class="actions">
            <!-- Empleando las increíbles clases de utilidad de tu style.css -->
            <button class="btn btn-outline" style="min-width: 100px;">Ajustes</button>
            <button class="btn btn-primary" style="min-width: 120px;">Nueva Acción</button>

            <div class="user-avatar" title="Perfil de Usuario">
                <span>GA</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tabs-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-bg-surface);
    height: 75px;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    /* Sombras profesionales que aportan profundidad y separan el top bar del contenido */
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
    border-bottom: 1px solid var(--color-border-default);
    position: relative;
    z-index: 100;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 250px;
    /* Balancea el layout vs panel derecho */
}

img {
    height: 40px;
    width: auto;
}

.tabs-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    /* Centra el contenedor de las pestañas magnéticamente */
}

/* Cuna contenedora gris para alojar las píldoras con profundidad */
.tabs-container {
    display: flex;
    align-items: center;
    background-color: var(--color-bg-page);
    /* Fonde tenue del Design System */
    padding: 6px;
    border-radius: 12px;
    gap: 6px;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.03);
    /* Sombra interna para crear hundimiento sutil */
    border: 1px solid var(--color-border-default);
}

/* Default Tab state */
.tab {
    background: transparent;
    border: none;
    height: 42px;
    padding: 0 26px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.tab:hover:not(.active) {
    color: var(--color-text-primary);
    background-color: rgba(92, 63, 212, 0.05);
    /* Rastro sutil lila al hacer hover */
}

/* ACTIVE TAB PÍLDORA FLOTANTE */
.tab.active {
    background-color: var(--color-bg-surface);
    /* Extrae la píldora al nivel de la superficie */
    color: var(--color-accent-default);
    /* Resalta el texto con tu acento Violeta CRM */
    font-weight: 600;
    /* Sombras 3D en capas: una mancha púrpura difusa (glow) y otra nítida de elevación */
    box-shadow: 0 4px 14px rgba(92, 63, 212, 0.12), 0 1px 4px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--color-border-default);
    transform: translateY(-1px);
    /* Efecto material de elevación visible */
}

.actions {
    display: flex;
    align-items: center;
    gap: 15px;
    min-width: 250px;
    justify-content: flex-end;
}

/* Avatar de Perfil Estilo Gradiente */
.user-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    /* Utiliza tu naranja principal y warning para un vibrante degradado premium */
    background: linear-gradient(135deg, var(--color-action-default), var(--color-warning-default));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
    /* Glow Naranja similar a Stripe */
    box-shadow: 0 4px 12px rgba(242, 100, 25, 0.3);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-left: 10px;
}

.user-avatar:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(242, 100, 25, 0.4);
}
</style>