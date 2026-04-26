<script setup>
import Sidebar from './Sidebar/Sidebar.vue'
import TabsBar from './TabsBar/TabsBar.vue'


import { useTabs } from '../../composables/useTabs'
const { tabs, addTab, closeTab, currentPage, activeTab } = useTabs();

</script>

<template>
  <div class="app">
    <!-- Sidebar a la izquierda, ocupando todo el alto -->
    <div class="sidebar-wrapper">
      <Sidebar @addTab="addTab" />
    </div>

    <!-- Contenido a la derecha -->
    <div class="content-container">
      <div class="header">
        <TabsBar :listTabs="tabs" @setCloseTab="closeTab" @setActiveTab="activeTab" />
      </div>

      <div class="main-wrapper">
        <component :is="currentPage" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row; /* Cambio a fila para que el sidebar esté a la izquierda */
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.sidebar-wrapper {
  height: 100%;
  flex-shrink: 0;
}

.content-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
}

.header {
  width: 100%;
  flex-shrink: 0;
}

.main-wrapper {
  flex-grow: 1;
  overflow: auto;
  background: var(--color-bg-page);
  padding: 0;
  margin: 0;
}
</style>

