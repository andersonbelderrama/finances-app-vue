<script>
export default {
  props: {
    darkMode: {
      type: Boolean,
      required: true
    }
  },
  emits: ['toggleSidebar', 'toggleDarkMode'],
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
    toggleDarkMode() {
      this.$emit('toggleDarkMode');
    },
  },
};
</script>

<template>
  <header class="sticky top-0 z-30 w-full flex justify-between items-center px-2 md:px-4 dark:bg-neutral-800 bg-neutral-100 h-12 md:h-16 shadow-lg">
    <div class="flex items-center space-x-4 w-64">
      <button @click="toggleSidebar()" class="dark:hover:bg-neutral-700 rounded-md cursor-pointer p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <h1 class="text-xl md:text-2xl font-bold dark:text-violet-600 text-violet-900">
        Finances<span class="dark:font-light font-normal dark:text-neutral-100 text-neutral-950">App</span>
      </h1>
    </div>
    <div class="flex items-center space-x-2">
      <button @click="toggleDarkMode()" class="dark:hover:bg-neutral-700 rounded-md cursor-pointer p-2 flex">
        <span class="material-symbols-outlined">{{ darkMode ? 'light_mode' : 'dark_mode' }}</span>
      </button>
      <button  class="flex items-centerdark:hover:bg-neutral-700 rounded-md cursor-pointer px-1 py-2">
        <span class="material-symbols-outlined">account_circle</span>
        <span class="material-symbols-outlined">expand_more</span>
      </button>
    </div>
  </header>
</template>
