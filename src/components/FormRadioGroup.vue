<template>
    <div 
        :class="selectedOption !== '' ? 'border-violet-600' : 'border-gray-500'"
        class="relative border rounded-lg p-3 transition duration-75"
    >
        <span 
            :class="selectedOption !== '' ? 'dark:text-violet-600 text-violet-600' : ''"
            class="absolute -top-2 left-4 text-xs font-semibold tracking-wide dark:text-neutral-500 dark:bg-neutral-700 px-1 transition duration-75"
        >
        Tipo
        </span>
        <label
            v-for="option in options"
            :key="option"
            class="flex items-center cursor-pointer py-2"
        >
        <input
          type="radio"
          :value="option"
          v-model="selectedOption"
          @change="onOptionChange"
          class="form-radio text-violet-600 h-4 w-4 mr-2 focus:ring-violet-600"
        />
        <span class="text-sm capitalize">{{ option }}</span>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
      value: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        selectedOption: this.value || '',
      };
    },
    methods: {
      onOptionChange() {
        this.$emit('input', this.selectedOption);
      },
    },
  };
  </script>
  