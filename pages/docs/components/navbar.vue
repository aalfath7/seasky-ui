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
      <nav class="flex justify-between items-center px-5 py-5 border shadow">
        <NuxtLink to="/" class="flex items-center space-x-2 font-bold">
          <img src="/icon-seasky.png" alt="" class="h-8" />
          <span>Seasky UI</span>
        </NuxtLink>
        <ul class="lg:flex space-x-2 sm:space-x-5 hidden">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">About</NuxtLink></li>
          <li><NuxtLink to="/">Services</NuxtLink></li>
          <li><NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
        <button type="button" class="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </nav>

      <div
        class="hidden fixed -top-3 left-0 bg-white h-screen w-full flex flex-col justify-center items-center"
      >
        <button type="button" class="absolute top-5 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul class="space-y-2 text-center">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">About</NuxtLink></li>
          <li><NuxtLink to="/">Services</NuxtLink></li>
          <li><NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
      </div>
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
