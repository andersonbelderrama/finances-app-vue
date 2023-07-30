<template>
  <label class="relative inline-block">
    <input
      type="checkbox"
      class="sr-only"
      v-model="checked"
    />
    <div
      class="w-12 h-6  rounded-full shadow transition-all duration-300"
      :class="checked ? 'bg-violet-600' : 'bg-gray-300'"
    ></div>
    <div
      class="absolute w-6 h-6 bg-white rounded-full shadow border border-gray-300 inset-y-0 left-0 transition-all duration-300 ease-in"
      :class="{ 'translate-x-6': checked }"
    ></div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>
