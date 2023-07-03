<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    sidebarVisible: {
      type: Boolean,
      required: true,
    },
  },
};

</script>

<template>
  <aside :class="sidebarVisible ? 'translate-x-0 md:-translate-x-full' : '-translate-x-full md:translate-x-0'"
    class="fixed top-12 left-0 bottom-0 z-20 flex flex-col space-y-2 w-64 min-h-screen px-2 py-4 dark:bg-violet-900 bg-violet-600 text-neutral-50 transition-transform ease-in-out duration-300 shadow-md overflow-y-auto">
    <RouterLink
      class="dark:hover:bg-violet-700 dark:hover:text-violet-100 dark:font-light font-normal rounded-full cursor-pointer px-3 py-2 flex space-x-2"
      to="/">
      <span class="material-symbols-outlined">dashboard</span>
      <span>Dahsboard</span>
    </RouterLink>
    <RouterLink
      class="dark:hover:bg-violet-700 dark:hover:text-violet-100 dark:font-light font-normal rounded-full cursor-pointer px-3 py-2 flex space-x-2"
      to="/transactions">
      <span class="material-symbols-outlined">account_balance</span>
      <span>Contas Bancarias</span>
    </RouterLink>
    <RouterLink
      class="dark:hover:bg-violet-700 dark:hover:text-violet-100 dark:font-light font-normal rounded-full cursor-pointer px-3 py-2 flex space-x-2"
      to="/transactions">
      <span class="material-symbols-outlined">paid</span>
      <span>Movimentações</span>
    </RouterLink>
    <RouterLink
      class="dark:hover:bg-violet-700 dark:hover:text-violet-100 dark:font-light font-normal rounded-full cursor-pointer px-3 py-2 flex space-x-2"
      to="/transactions">
      <span class="material-symbols-outlined">savings</span>
      <span>Orçamentos</span>
    </RouterLink>
    <RouterLink
      class="dark:hover:bg-violet-700 dark:hover:text-violet-100 dark:font-light font-normal rounded-full cursor-pointer px-3 py-2 flex space-x-2"
      to="/transactions">
      <span class="material-symbols-outlined">flag</span>
      <span>Metas</span>
    </RouterLink>
  </aside>
</template>
