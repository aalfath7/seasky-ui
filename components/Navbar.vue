<template>
  <nav class="flex justify-between items-center py-2 px-2 sm:px-16">
    <NuxtLink to="" class="flex items-center space-x-2">
      <img src="/icon-seasky.png" alt="" class="h-12" />
      <span class="font-bold text-gray-700">Seasky UI</span>
    </NuxtLink>
    <ul class="flex space-x-2 sm:space-x-5">
      <li>
        <NuxtLink
          to="/docs/introduction/getting-started"
          class="text-gray-700 hover:text-blue-500"
          >Docs</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="https://heroicons.com/"
          target="_blank"
          class="text-gray-700 hover:text-blue-500"
          >Icons</NuxtLink
        >
      </li>
      <span>|</span>
      <li>
        <NuxtLink to="https://github.com/aalfath7/seasky-ui" target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github text-gray-700 hover:text-gray-500"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path></svg
        ></NuxtLink>
      </li>
    </ul>
  </nav>
</template>
