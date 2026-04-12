<script setup>
import Sidebar from './Sidebar/Sidebar.vue'
import TabsBar from './TabsBar/TabsBar.vue'


import { useTabs } from '../../composables/useTabs'
const { tabs, addTab, closeTab, currentPage, activeTab } = useTabs();

</script>

<template>
  <div class="app">
    <div class="header">
      <TabsBar :listTabs="tabs" @setCloseTab="closeTab" @setActiveTab="activeTab" />
    </div>

    <div class="main-container">
      <div class="sidebar-wrapper">
        <Sidebar @addTab="addTab" />
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
  flex-direction: column;
  height: 100vh;
}

.header {
  width: 100%;
  flex-shrink: 0;
}

.sidebar-wrapper {
  width: 200px;
}

.main-container {
  display: flex;
  justify-content: start;
  align-items: stretch;
  flex-grow: 1;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.main-wrapper {
  flex-grow: 1;
  overflow: auto;
  padding: 20px;
  background: var(--color-bg-surface);
  margin: 0;
  padding: 0;
}
</style>
