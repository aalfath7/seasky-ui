<template>
  <div>
    <Header title="Navbar" />
    <Section>
      <p>
        Navbar merupakan komponen yang digunakan untuk membuat menu navigasi.
      </p>
      <p>
        Komponen ini terdiri dari beberapa link yang terhubung dengan halaman
        tertentu.
      </p>
    </Section>
    <Section>
      <h2 class="font-bold text-xl">Simple Navbar</h2>
      <nav class="flex justify-between items-center px-5 py-5 border">
        <NuxtLink to="/" class="flex items-center space-x-2 font-bold">
          <img src="/icon-seasky.png" alt="" class="h-8" />
          <span>Seasky UI</span>
        </NuxtLink>
        <ul class="flex space-x-2 sm:space-x-5">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">About</NuxtLink></li>
          <li><NuxtLink to="/">Services</NuxtLink></li>
          <li><NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
      </nav>
      <pre class="text-sm px-2 bg-gray-100 overflow-x-auto"><code>
&lt;<span class="tag">nav</span> class="flex justify-between items-center px-5 py-5 border"&gt;
  &lt;<span class="tag">NuxtLink</span> to="/" class="flex items-center space-x-2 font-bold"&gt;
    &lt;<span class="tag">img</span> src="/icon-seasky.png" alt="" class="h-8" /&gt;
    &lt;<span class="tag">span</span>&gt;Seasky UI&lt;/<span class="tag">span</span>&gt;
  &lt;/<span class="tag">NuxtLink</span>&gt;
  &lt;<span class="tag">ul</span> class="flex space-x-2 sm:space-x-5"&gt;
    &lt;<span class="tag">li</span>&gt;&lt;<span class="tag">NuxtLink</span> to="/"&gt;<span class="content">Home</span>&lt;/<span class="tag">NuxtLink</span>&gt;&lt;/<span class="tag">li</span>&gt;
    &lt;<span class="tag">li</span>&gt;&lt;<span class="tag">NuxtLink</span> to="/"&gt;<span class="content">About</span>&lt;/<span class="tag">NuxtLink</span>&gt;&lt;/<span class="tag">li</span>&gt;
    &lt;<span class="tag">li</span>&gt;&lt;<span class="tag">NuxtLink</span> to="/"&gt;<span class="content">Services</span>&lt;/<span class="tag">NuxtLink</span>&gt;&lt;/<span class="tag">li</span>&gt;
    &lt;<span class="tag">li</span>&gt;&lt;<span class="tag">NuxtLink</span> to="/"&gt;<span class="content">Contact</span>&lt;/<span class="tag">NuxtLink</span>&gt;&lt;/<span class="tag">li</span>&gt;
  &lt;/<span class="tag">ul</span>&gt;
&lt;/<span class="tag">nav</span>&gt;
    </code></pre>
    </Section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "docs-layout",
});
</script>

<style scoped>
pre code {
  font-family: "Inter";
}

pre code span.tag {
  color: green;
}

pre code span.content {
  color: black;
}
</style>
