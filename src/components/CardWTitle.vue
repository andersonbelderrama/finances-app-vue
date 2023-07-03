<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contentVisible: true, 
      iconButtonExpand: 'expand_less', 
    }
  },
  methods: {
    hiddenContent() {
      if (this.contentVisible) {
        setTimeout(() => {
          this.contentVisible = false;
          this.iconButtonExpand = 'expand_more'; // Alterar para o ícone de abertura
        }, 300); // Aguarde a conclusão da transição de fechamento (300ms)
      } else {
        this.contentVisible = true;
        this.iconButtonExpand = 'expand_less'; // Alterar para o ícone de fechamento
      }
    }
  }
};
</script>

<template>
  <div class="dark:bg-neutral-800  bg-neutral-100 rounded-xl shadow-lg border-t-2 border-violet-900 mb-4 mt-2">
    <div class=" p-2 flex justify-between items-center">
      <div class="flex space-x-1">
        <span class="material-symbols-outlined">{{ icon }}</span>
        <h1 class="font-semibold tracking-wider">{{ title }}</h1>
    </div>
    <div class="flex space-x-2 items-center">
      <button @click="hiddenContent" class="w-8 h-8"><span class="material-symbols-outlined">{{ iconButtonExpand }}</span></button>
    </div>
    </div>
    <transition name="slide">
      <div v-if="contentVisible" class="px-2 py-4 flex border-t dark:border-neutral-700">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

</style>
