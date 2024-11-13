<template>
  <div>
    <header>
      <h1 class="font-bold text-3xl py-2">{{ title }}</h1>
    </header>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
