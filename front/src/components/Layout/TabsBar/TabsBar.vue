<script setup>
import { ref, defineProps, watch } from 'vue';
import { Plus, X } from 'lucide-vue-next';

const activeTab = ref(1);

const props = defineProps({
    listTabs: {
        type: Array,
        default: () => []
    }
});

watch(() => props.listTabs.length, (newLen, oldLen) => {
    // PROTECCIÓN CONTRA CRASH: Solo modificamos si la nueva longitud es válida.
    if (newLen > 0 && newLen > oldLen) {
        activeTab.value = props.listTabs[newLen - 1].id;
    } else if (newLen === 0) {
        activeTab.value = 1;
    }
});

const emit = defineEmits(['closeTab']);

function closeTab(tabId) {
    // IMPORTANTE: Quité el activeTab aquí porque rompía la reactividad al sincronizar.
    // Solo debes avisarle al papá (App.vue -> useTabs) que lo borre.
    emit('closeTab', tabId);
}

</script>

<template>
    <div class="tabs-bar">
        <div class="logo">
            <img src="../../../../public/logo/Logo.svg" alt="Logo">
        </div>

        <div class="tabs-wrapper">
            <div class="tabs-container">

                <button class="tab" v-for="tab in props.listTabs" :key="tab.id"
                    :class="{ 'active': activeTab === tab.id }" @click="activeTab = tab.id">
                    <span>{{ tab.name }}</span>
                    <component class="close-tab" :is="X" :size="16" :stroke-width="2.5" v-if="activeTab === tab.id"
                        @click="closeTab(tab.id)" />
                </button>

                <!-- Default -->
                <button class="tab" :key="1" v-if="props.listTabs.length === 0" :class="{ 'active': activeTab === 1 }"
                    @click="activeTab = 1">
                    <component :is="Plus" :size="18" :stroke-width="2" />
                </button>
            </div>
        </div>

        <div class="actions">
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
}

img {
    height: 40px;
    width: auto;
}

.tabs-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
}

.tabs-container {
    display: flex;
    align-items: center;
    background-color: var(--color-bg-page);
    padding: 6px;
    border-radius: 12px;
    gap: 5px;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.03);
    border: 1px solid var(--color-border-default);
}

.tab {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    /* Controla el espacio perfecto entre texto y la X */
    background: transparent;
    border: none;
    height: 42px;
    padding: 0 20px;
    /* Un poco menos de padding porque el gap ya da espacio */
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
}

.tab.active {
    background-color: var(--color-bg-surface);
    color: var(--color-accent-default);
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(92, 63, 212, 0.12), 0 1px 4px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--color-border-default);
    transform: translateY(-1px);
}

.actions {
    display: flex;
    align-items: center;
    gap: 15px;
    min-width: 250px;
    justify-content: flex-end;
}

.user-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-action-default), var(--color-warning-default));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
    box-shadow: 0 4px 12px rgba(242, 100, 25, 0.3);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-left: 10px;
}

.user-avatar:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(242, 100, 25, 0.4);
}

.icon {
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.close-tab {
    margin-left: 0;
    opacity: 0.6;
    transition: all 0.2s ease;
    border-radius: 4px;
    padding: 2px;
    /* Un poquito de aire interno si deciden hacerlo clickeable después */
}

.close-tab:hover {
    opacity: 1;
    color: var(--color-danger-default);
    background-color: var(--color-danger-subtle);
}
</style>