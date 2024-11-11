<template>
  <div>
    <header>
      <h1 class="font-bold text-2xl">{{ title }}</h1>
    </header>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
