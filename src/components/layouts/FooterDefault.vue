<script>
export default {
  emits: ['toggleSidebar'],
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
  },
};
</script>

<template>
  <footer class="flex w-full h-12 justify-center items-center p-2 font-light text-xs">
    <p><span class="hidden md:block">Todos os Direitos Reservados</span><span> © 2023</span> - Desenvolvido por <a href="https://github.com/andersonbelderrama" target="_blank">Anderson Belderrama</a></p>
  </footer>
</template>
