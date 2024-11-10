<template>
  <aside
    class="fixed top-0 left-0 w-72 h-screen bg-white z-40 duration-100 sm:translate-x-0 shadow-lg"
  >
    <a href="/" class="flex items-center py-5 px-10">
      <img src="/logo-seasky.png" alt="" class="h-12" />
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
</template>

<script setup>
const data = [
  {
    groupName: "introduction",
    body: [
      {
        name: "getting started",
        link: "/getting-started",
      },
      {
        name: "advanced usage",
        link: "/advanced-usage",
      },
      {
        name: "contents",
        link: "/getting-started",
      },
    ],
  },
  {
    groupName: "customize",
    body: [
      {
        name: "sass",
        link: "/getting-started",
      },
      {
        name: "options",
        link: "/getting-started",
      },
      {
        name: "colors",
        link: "/getting-started",
      },
    ],
  },
  {
    groupName: "layout",
    body: [
      {
        name: "breakpoints",
        link: "/getting-started",
      },
      {
        name: "page wrappper",
        link: "/getting-started",
      },
      {
        name: "containers",
        link: "/getting-started",
      },
      {
        name: "grid",
        link: "/getting-started",
      },
      {
        name: "header",
        link: "/getting-started",
      },
      {
        name: "footer",
        link: "/getting-started",
      },
    ],
  },
  {
    groupName: "elements",
    body: [
      {
        name: "reset",
        link: "/getting-started",
      },
      {
        name: "document",
        link: "/getting-started",
      },
      {
        name: "typography",
        link: "/getting-started",
      },
      {
        name: "images",
        link: "/getting-started",
      },
      {
        name: "tables",
        link: "/getting-started",
      },
      {
        name: "buttons",
        link: "/getting-started",
      },
      {
        name: "forms",
        link: "/getting-started",
      },
    ],
  },
  {
    groupName: "components",
    body: [
      {
        name: "pagination",
        link: "/getting-started",
      },
      {
        name: "breadcrumb",
        link: "/getting-started",
      },
      {
        name: "card",
        link: "/getting-started",
      },
      {
        name: "cover",
        link: "/getting-started",
      },
      {
        name: "parallax",
        link: "/getting-started",
      },
      {
        name: "slider",
        link: "/getting-started",
      },
    ],
  },
  {
    groupName: "utilities",
    body: [
      {
        name: "overview",
        link: "/getting-started",
      },
      {
        name: "text colors",
        link: "/getting-started",
      },
      {
        name: "background colors",
        link: "/getting-started",
      },
      {
        name: "text alignment",
        link: "/getting-started",
      },
      {
        name: "spacing",
        link: "/getting-started",
      },
    ],
  },
];
</script>
