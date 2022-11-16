import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePostStore = defineStore("Posts", () => {
  let index = ref(0);
  const posts = ref([
    {
      id: 1,
      title: "Item 1",
      body: "Item 1 body",
    },
    {
      id: 2,
      title: "Item 2",
      body: "Item 2 body",
    },
    {
      id: 3,
      title: "Item 3",
      body: "Item 3 body",
    },
    {
      id: 4,
      title: "Item 4",
      body: "Item 4 body",
    },
    {
      id: 5,
      title: "Item 5",
      body: "Item 5 body",
    },
    {
      id: 6,
      title: "Item 6",
      body: "Item 6 body",
    },
    {
      id: 7,
      title: "Item 7",
      body: "Item 7 body",
    },
    {
      id: 8,
      title: "Item 8",
      body: "Item 8 body",
    },
    {
      id: 9,
      title: "Item 9",
      body: "Item 9 body",
    },
  ]);

  const addIndex = () => {
    index.value += 2;
  };

  const decIndex = () => {
    index.value -= 2;
  };

  const viewWindow = computed(() => {
    return posts.value.slice(index.value, index.value + 3);
  });

  return { index, posts, viewWindow, addIndex, decIndex };
});
