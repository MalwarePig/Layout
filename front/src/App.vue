<script setup>
import Main from './components/Layout/Main/Main.vue'
import Sidebar from './components/Layout/Sidebar/Sidebar.vue'
import TabsBar from './components/Layout/TabsBar/TabsBar.vue'
</script>

<template>
  <div class="app">

    <div class="header">
      <TabsBar />
    </div>

    <div class="main-container">
      <div class="sidebar-wrapper">
        <Sidebar />
      </div>

      <div class="main-wrapper">
        <Main />
      </div>
    </div>

  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

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
}
</style>
