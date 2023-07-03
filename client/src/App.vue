<script setup lang="ts">
import SmusicHome from "./views/SmusicHome.vue";
</script>

<template>
  <div class="app">
    <div class="app_wrapper">
      <SmusicHome />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  color: #000;
}

button {
  background-color: #fff;
  border: none;
}

input {
  outline: none;
  border: none;
}

.f-v-c {
  display: flex;
  align-items: center;
}

.app {
  background-color: #f6f5f3;
}
.app_wrapper {
  background-color: #fff;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 30px;
}

.app_wrapper,
.app {
  min-height: 100vh;
}
</style>
