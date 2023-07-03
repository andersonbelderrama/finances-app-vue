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
  <footer class="flex w-full h-12 justify-center items-center p-2 font-light text-sm">
    <p><span>Todos os Direitos Reservados © 2023</span> - Desenvolvido por <a href="https://github.com/andersonbelderrama" target="_blank">Anderson Belderrama</a></p>
  </footer>
</template>
