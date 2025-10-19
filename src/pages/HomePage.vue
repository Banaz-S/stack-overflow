<script setup>
import { useCounterStore } from "@/stores/counter.js";

const countStore = useCounterStore();
</script>

<template>
  <div class="home">
    <h1>Home Page using DefaultLayout</h1>
    <p class="text-white">Welcome to our app — frontend setup in progress!</p>
    <button @click="countStore.increment()">{{ countStore.count }}</button>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
.home {
  @apply text-center space-y-4;
}

button {
  @apply px-4 py-2 rounded bg-gray-900 hover:bg-gray-900/75;

  color: white;
  outline: none;
  border: none;
}
</style>
