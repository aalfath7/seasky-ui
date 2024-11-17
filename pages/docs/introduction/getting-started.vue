<template>
  <div>
    <Header title="Getting Started" />
    <Section>
      <h2 class="font-bold text-xl">Tentang Seasky UI</h2>
      <p>
        Seasky UI dibuat untuk memudahkan dalam pembuatan komponen-komponen pada
        tampilan website.
      </p>
      <p>
        Kerangka kerja ini dibangun diatas library
        <NuxtLink
          to="https://tailwindcss.com"
          target="_blank"
          class="text-blue-500"
        >
          TailwindCSS
        </NuxtLink>
        dan framework
        <NuxtLink
          to="https://vuejs.org/"
          target="_blank"
          class="text-green-500"
        >
          Vue.JS
        </NuxtLink>
      </p>
    </Section>
    <Section>
      <h2 class="font-bold text-xl">Prasyarat</h2>
      <p>
        Install library
        <NuxtLink
          to="https://tailwindcss.com/docs/installation"
          target="_blank"
          class="text-blue-500"
        >
          TailwindCSS</NuxtLink
        >
        terlebih dahulu untuk bisa menggunakan.
      </p>
    </Section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "docs-layout",
});
</script>
