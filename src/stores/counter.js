import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePostStore = defineStore("Posts", () => {
  let index = ref(0);
  const posts = ref([
    {
      id: 1,
      title: "Post 1",
      body: "Post 1 body",
    },
    {
      id: 2,
      title: "Post 2",
      body: "Post 2 body",
    },
    {
      id: 3,
      title: "Post 3",
      body: "Post 3 body",
    },
    {
      id: 4,
      title: "Post 4",
      body: "Post 4 body",
    },
    {
      id: 5,
      title: "Post 5",
      body: "Post 5 body",
    },
    {
      id: 6,
      title: "Post 6",
      body: "Post 6 body",
    },
    {
      id: 7,
      title: "Post 7",
      body: "Post 7 body",
    },
    {
      id: 8,
      title: "Post 8",
      body: "Post 8 body",
    },
    {
      id: 9,
      title: "Post 9",
      body: "Post 9 body",
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
