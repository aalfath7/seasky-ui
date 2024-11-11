<template>
  <div>
    <Header :title="route.params.slug" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "docs-layout",
});
const route = useRoute();
</script>
