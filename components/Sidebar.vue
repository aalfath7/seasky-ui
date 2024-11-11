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
        link: "/contents",
      },
    ],
  },
  {
    groupName: "customize",
    body: [
      {
        name: "sass",
        link: "/sass",
      },
      {
        name: "options",
        link: "/options",
      },
      {
        name: "colors",
        link: "/colors",
      },
    ],
  },
  {
    groupName: "layout",
    body: [
      {
        name: "breakpoints",
        link: "/breakpoints",
      },
      {
        name: "page wrappper",
        link: "/page-wrapper",
      },
      {
        name: "containers",
        link: "/containers",
      },
      {
        name: "grid",
        link: "/grid",
      },
      {
        name: "header",
        link: "/header",
      },
      {
        name: "footer",
        link: "/footer",
      },
    ],
  },
  {
    groupName: "elements",
    body: [
      {
        name: "reset",
        link: "/reset",
      },
      {
        name: "document",
        link: "/document",
      },
      {
        name: "typography",
        link: "/typography",
      },
      {
        name: "images",
        link: "/images",
      },
      {
        name: "tables",
        link: "/tables",
      },
      {
        name: "buttons",
        link: "/buttons",
      },
      {
        name: "forms",
        link: "/forms",
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
        link: "/overview",
      },
      {
        name: "text colors",
        link: "/text-colors",
      },
      {
        name: "background colors",
        link: "/background-colors",
      },
      {
        name: "text alignment",
        link: "/text-alignment",
      },
      {
        name: "spacing",
        link: "/spacing",
      },
    ],
  },
];
</script>
