<script setup>
import { usePostStore } from "./stores/counter";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = usePostStore();
const { index, viewWindow } = storeToRefs(store);

let loading = ref(false);

window.onscroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    if (index.value > 2) return;
    loading.value = true;
    setTimeout(() => {
      store.addIndex();
      loading.value = false;
    }, 1000);
  }
  if (document.documentElement.scrollTop === 0) {
    if (index.value === 0) return;
    loading.value = true;
    setTimeout(() => {
      store.decIndex();
      document.documentElement.scrollTop = 10;
      loading.value = false;
    }, 1000);
  }
};
</script>

<template>
  <div v-if="loading" class="loading">LOADING...</div>
  <div class="index-counter">{{ index }}</div>
  <div class="viewport">
    <div style="margin-bottom: 20px; font-size: 30px">Data Loaded:</div>
    {{ viewWindow }}
  </div>
  <div class="top-detection"></div>
  <ul>
    <li v-for="posts in viewWindow" :key="posts.id">
      <h2>{{ posts.title }}</h2>
      <p>{{ posts.body }}</p>
    </li>
  </ul>
  <div class="bottom-detection"></div>
</template>

<style scoped></style>
