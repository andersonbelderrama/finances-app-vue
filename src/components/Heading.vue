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
};
</script>

<template>
    <div class="flex space-x-1 justify-between items-center p-2">
        <div class="flex space-x-1 items-center">
            <span class="material-symbols-outlined">{{ icon }}</span>
            <h1 class="text-lg uppercase tracking-widest font-semibold">{{ title }}</h1>
        </div>
        <div class="flex space-x-1 items-center">
            <button class="flex space-x-1 items-center p-2">
                <span class="material-symbols-outlined">arrow_back</span><span>Voltar</span>
            </button>
        </div>
    </div>
</template>