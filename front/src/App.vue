<script setup>
import { NConfigProvider, NMessageProvider, NNotificationProvider, NDialogProvider } from 'naive-ui'
</script>

<template>
  <n-config-provider>
    <n-message-provider :container-style="{ top: '10%' }">
      <n-notification-provider>
        <n-dialog-provider>
          <router-view></router-view>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
