<script setup>
import { usePostStore } from "./stores/counter";
import { storeToRefs } from "pinia";

const store = usePostStore();
const { index, viewWindow } = storeToRefs(store);

window.onscroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    if (index.value > 2) return;
    store.addIndex();
  }
  if (document.documentElement.scrollTop === 0) {
    if (index.value === 0) return;
    store.decIndex();
    document.documentElement.scrollTop = 10;
  }
};
</script>

<template>
  <div class="index-counter">{{ index }}</div>
  <div class="viewport">
    <div style="margin-bottom: 20px; font-size: 30px">Data Loaded:</div>
    {{ viewWindow }}
  </div>
  <!-- <div class="top-detection"></div> -->
  <ul>
    <li v-for="posts in viewWindow" :key="posts.id">
      <h2>{{ posts.title }}</h2>
      <p>{{ posts.body }}</p>
    </li>
  </ul>
  <!-- <div class="bottom-detection"></div> -->
</template>

<style scoped></style>
