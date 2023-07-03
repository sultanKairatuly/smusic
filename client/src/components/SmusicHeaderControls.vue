<template>
  <div class="controls f-v-c">
    <nav class="nav f-v-c">
      <div class="nav_item">Главная</div>
      <div class="nav_item">Подкасты и книги</div>
      <div class="nav_item">Детям</div>
    </nav>
    <div class="search_container f-v-c">
      <button class="search_button">
        <font-awesome-icon icon="fa-solid fa-search" class="search_icon" />
      </button>
      <input type="text" class="search_input" placeholder="Поиск" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.controls {
}
.nav {
  column-gap: 10px;
}
.nav_item {
  font-size: 18px;
  color: #808080;
}

.nav_item:hover {
  color: #eb483e;
}
.search_container {
  -webkit-box-shadow: 0px 0px 25px 5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 25px 5px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 25px 5px rgba(34, 60, 80, 0.2);
  padding: 5px 10px;
  column-gap: 10px;
  border-radius: 5px;
}
.search_button {
  cursor: pointer;
  padding: 0 5px;
}

.search_icon {
  font-size: 16px;
  font-weight: 400;
  color: #a7a7a7;
}

.search_button:hover .search_icon {
  color: #000;
}

.search_input {
  font-size: 20x;
}
</style>
