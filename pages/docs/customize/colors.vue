<template>
  <div>
    <Header title="Colors" />
    <p>All the colors are from palette.</p>
    <Section>
      <h2 class="font-bold text-xl">All Colors</h2>
      <div class="py-4 grid grid-cols-6 lg:grid-cols-9 gap-1">
        <div
          v-for="color in colors"
          :class="color.class"
          class="rounded-lg w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 m-2 border"
        ></div>
      </div>
    </Section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "docs-layout",
});

// colors.js (atau di dalam data Vue)
const colors = [
  { class: "bg-primary", hex: "#3498db" },
  { class: "bg-primary-light", hex: "#6ec1e4" },
  { class: "bg-primary-dark", hex: "#2980b9" },
  { class: "bg-secondary", hex: "#2ecc71" },
  { class: "bg-secondary-light", hex: "#a3e6b7" },
  { class: "bg-secondary-dark", hex: "#27ae60" },
  { class: "bg-accent", hex: "#f39c12" },
  { class: "bg-accent-light", hex: "#ffeb3b" },
  { class: "bg-accent-dark", hex: "#e67e22" },
  { class: "bg-neutral", hex: "#bdc3c7" },
  { class: "bg-neutral-light", hex: "#ecf0f1" },
  { class: "bg-neutral-dark", hex: "#7f8c8d" },
  { class: "bg-background-light", hex: "#ffffff" },
  { class: "bg-background-dark", hex: "#2c3e50" },
  { class: "bg-background-muted", hex: "#f5f5f5" },
  { class: "bg-success", hex: "#2ecc71" },
  { class: "bg-warning", hex: "#f39c12" },
  { class: "bg-error", hex: "#e74c3c" },
  { class: "bg-info", hex: "#3498db" },
];
</script>
