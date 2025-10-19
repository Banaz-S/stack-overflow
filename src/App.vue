<script setup>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
</script>

<template>
  <Component :is="$route?.meta.layout ? $route.meta.layout : DefaultLayout" />
</template>
