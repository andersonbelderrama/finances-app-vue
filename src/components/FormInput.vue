<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isFocused: false,
            hasValue: false,
            hasError: false,
        }
    },
    methods: {
        checkValue(event) {
            this.hasValue = event.target.value.trim() !== '';
        },
    }
}
</script>

<template>
    <div class="relative">
        <label
            :class="isFocused || hasValue ? '-translate-y-2 text-xs dark:text-violet-600 dark:bg-neutral-700 font-semibold tracking-wide' : 'top-2 text-md dark:text-neutral-500 font-semibold'"
            class="absolute left-4 px-1 transition duration-75" for="nome">{{ label }}</label>
        <input @focus="isFocused = true" @blur="isFocused = false" @input="checkValue"
            :class="hasValue ? 'border-violet-600' : ''" id="nome" type="text"
        class="form-input w-full px-5 py-2 rounded-lg dark:bg-neutral-700 dark:text-neutral-400 focus:ring-1 focus:ring-violet-600 focus:border-violet-600">
</div></template>