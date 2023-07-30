<template>
    <div class="relative">
        <label
            :class="[
                isFocused || hasValue || hasError ?'-translate-y-2 text-xs font-semibold tracking-wide' : 'top-2 text-md font-semibold',
                isFocused || hasValue ? 'dark:text-violet-600 text-violet-600' : 'dark:text-neutral-500',
                hasError ? 'dark:text-red-600 text-red-600' : '',
            ]"
            class="absolute left-4 px-1 transition duration-75 dark:bg-neutral-700" 
            :for="label">
            {{ label }}
        </label>
        <input
            :value="value"
            @input="$emit('input', $event.target.value)"
            @focus="onFocus" 
            @blur="onBlur" 
            @change="onChange"
            :class="[
                hasValue ? 'border-violet-600' : '',
                hasError ? 'border-red-600 focus:ring-red-600 focus:border-red-600' : '',
            ]" 
            :id="label" 
            type="text"
        class="form-input w-full px-5 py-2 rounded-lg dark:bg-neutral-700 dark:text-neutral-400 focus:ring-1 focus:ring-violet-600 focus:border-violet-600">
        <span v-if="hasError" class="text-xs text-red-600 px-1">{{ message }}</span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: false     
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
            isFocused: false,
            hasValue: false,
        }
    },
    methods: {
        onChange(event) {
            this.hasValue = event.target.value.trim() !== '';
        },
        onFocus() {
            this.isFocused = true;
        },
        onBlur() {
            this.isFocused = false
        }
    }
}
</script>