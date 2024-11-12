<template>
  <div class="max-w-7xl mx-auto py-10 grid sm:grid-cols-2 space-y-10">
    <div class="sm:order-last flex items-center justify-center">
      <img src="/icon-seasky.png" alt="" class="h-44 sm:h-96" />
    </div>
    <div class="space-y-5 text-center sm:text-left max-w-md mx-auto">
      <h1 class="text-2xl sm:text-5xl font-bold text-gray-700 leading-extra">
        <span class="text-blue-700">Seasky UI</span>, <br />
        A component-based UI framework with an aesthetic design.
      </h1>
      <p class="text-md sm:text-2xl text-gray-700 sm:leading-8">
        Seasky UI is a free, open-source framework built on top of Tailwind CSS
        that is ready to use for frontend development.
      </p>
      <div class="flex justify-center sm:justify-start space-x-2">
        <a href="/docs/introduction/getting-started" class="block">
          <button
            type="button"
            class="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-full text-md"
          >
            Get Started
          </button>
        </a>
        <a href="https://github.com/aalfath7/seasky-ui" class="block">
          <button
            type="button"
            class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-full text-md"
          >
            View on Github
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@media (min-width: 670px) {
  .leading-extra {
    line-height: 3.5rem;
  }
}
</style>
