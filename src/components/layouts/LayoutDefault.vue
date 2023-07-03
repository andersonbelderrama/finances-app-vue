<script>
import { RouterView } from "vue-router";
import SidebarDefault from "./SidebarDefault.vue";
import HeaderDefault from "./HeaderDefault.vue";
import FooterDefault from "./FooterDefault.vue";
export default {
  data() {
    return {
      sidebarVisible: false, // Defina o estado inicial do Sidebar como visível
      darkMode: true,
    };
  },
  components: {
    SidebarDefault,
    HeaderDefault,
    FooterDefault,
  },
  created() {
    document.body.classList.add("dark"); // Adicionar a classe "dark" no <body> como padrão
    this.darkMode = document.body.classList.contains('dark'); // Verificar se a classe "dark" está presente no <body>
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible; // Alternar o estado do Sidebar
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle("dark");
    }
  },

}
</script>

<template>
  <div class="dark:bg-neutral-900 dark:text-neutral-100 min-h-screen w-full font-open-sans">
    <HeaderDefault @toggleSidebar="toggleSidebar" @toggleDarkMode="toggleDarkMode" :darkMode="darkMode" />
    <div class="flex relative">
      <SidebarDefault :sidebarVisible="sidebarVisible" />
      <div :class="sidebarVisible ? 'md:ml-0' : 'md:ml-64'" class="w-full transition-transform ease-in-out duration-300">
        <main class="lg:container mx-auto md:px-4 p-2 h-screen w-full">
          <RouterView />
        </main>
        <FooterDefault />
      </div>
    </div>
  </div>
</template>
