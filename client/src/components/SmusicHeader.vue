<template>
  <header class="header  f-v-c">
    <h1 class="header_item header_title">Smusic</h1>
    <SmusicHeaderControls />
  </header>
</template>

<script setup lang="ts">
import SmusicHeaderControls from "./SmusicHeaderControls.vue";
</script>

<style scoped>
.header {
}

.header_title {
  font-size: 30px;
  font-weight: 600;
}
</style>
