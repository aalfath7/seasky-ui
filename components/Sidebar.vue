<template>
  <div>
    <nav class="sm:hidden p-4 border">
      <button @click="toggle" type="button">
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
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
    <aside
      :class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }"
      class="fixed top-0 left-0 w-72 h-screen bg-white z-40 duration-100 sm:translate-x-0 shadow-lg"
    >
      <a href="/" class="flex items-center py-5 px-10 z-50 space-x-2">
        <img src="/icon-seasky.png" alt="" class="h-8" />
        <span class="font-bold text-gray-700">Seasky UI</span>
      </a>
      <div class="h-full pb-52 overflow-y-auto px-14 capitalize">
        <div v-for="group in data" class="py-5 border-t">
          <span class="font-bold">{{ group.groupName }}</span>
          <ul class="text-sm space-y-3 font-medium py-3">
            <li v-for="item in group.body">
              <a
                :href="'/docs/' + group.groupName + item.link"
                class="hover:text-blue-800"
              >
                <span>{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <div
      @click="toggle"
      :class="{ hidden: !isOpen, block: isOpen }"
      class="fixed inset-0 bg-gray-800 z-20 opacity-50"
    ></div>
  </div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";
const isMobile = useMediaQuery("(max-width: 768px)");
const isOpen = ref(!isMobile);

const toggle = () => (isOpen.value = !isOpen.value);

const data = [
  {
    groupName: "introduction",
    body: [
      {
        name: "getting started",
        link: "/getting-started",
      },
    ],
  },
  {
    groupName: "components",
    body: [
      {
        name: "navbar",
        link: "/navbar",
      },
    ],
  },
];
</script>
