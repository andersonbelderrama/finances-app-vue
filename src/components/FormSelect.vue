<template>
    <div class="relative">
        <label
            :class="[
                isFocused || hasSelected || searchTerm !== '' || hasError || hasErrorComponent ? '-translate-y-2 text-xs font-semibold tracking-wide' : 'top-2 text-md font-semibold',
                isFocused || hasSelected ? 'dark:text-violet-600 text-violet-600' : 'dark:text-neutral-500',
                hasError || hasErrorComponent ? ' dark:text-red-600 text-red-600' : '',
            ]"
            class="absolute left-4 px-1 transition duration-75 dark:bg-neutral-700" for="nome">
            {{ label }}
        </label>
        <input
            v-model="searchTerm"
            @click="onClick"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput"
            @change="onChange"
            :class="[
                hasSelected ? 'border-violet-600' : '',
                hasError || hasErrorComponent ? 'border-red-600 focus:ring-red-600 focus:border-red-600' : '',
            ]"
            class="form-input w-full px-5 py-2 rounded-lg dark:bg-neutral-700 dark:text-neutral-400 focus:ring-1 focus:ring-violet-600 focus:border-violet-600"
            type="text"
        />
    <div
        v-if="isOpen"
        class="absolute w-full mt-2 border rounded bg-white shadow-lg z-10"
    >
        <ul class="max-h-40 overflow-y-auto">
            <li
                v-for="option in filteredOptions"
                :key="option"
                @click="selectOption(option)"
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-neutral-400"
            >
                {{ option }}
            </li>
        </ul>
      </div>
      <span v-if="message  && !hasSelected" class="text-xs text-red-600 px-1">{{ message }}</span>
      <span v-if="errorComponent  && !hasSelected" class="text-xs text-red-600 px-1">{{ errorComponent }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        label: {
            type: String,
            required: true
        }, 
        options: {
            type: Array,
            required: true,
        },
        hasError: {
            type: Boolean,
            required: false
        },
        message: {
            type: String,
            required: false
        }
    },
    data() {
      return {
        isOpen: false,
        searchTerm: "",
        isFocused: false,
        hasErrorComponent: false,
        errorComponent: "",
      };
    },
    computed: {
      filteredOptions() {
        return this.options.filter((option) =>
          option.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
      hasSelected() {
        return this.options.includes(this.searchTerm);
      }
    },
    methods: {
        onBlur() {
            setTimeout(() => {
            this.isOpen = false;
            }, 100);
            this.isFocused = false;

            if (this.searchTerm !== "") {
                this.hasErrorComponent = true;
                this.errorComponent = "Opção inválida. Selecione uma opção da lista.";
            } else {
                this.hasErrorComponent = false;
                this.errorComponent = "";
            }
        },
        onInput() {
            this.isOpen = true;
        },
        onChange() {
            
        },
        onFocus() {
            this.isFocused = true;
            this.isOpen = true;
        },
        onClick() {
            this.isOpen = true;
        },
        selectOption(option) {
            this.searchTerm = option;
            this.isOpen = false;
            this.$emit("selected", option);
        },

    },
  };
  </script>
  