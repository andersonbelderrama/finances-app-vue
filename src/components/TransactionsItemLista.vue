<script>
export default {
    props: {
        categoria: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: false
        },
        valor: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            contentVisible: false,
            iconValue: '',
            colorValue: '',
        }
    },
    computed: {
        iconTipo() {
            if (this.tipo == 'Despesa') {
                this.iconValue = 'arrow_downward'
            } else if (this.tipo == 'Receita') {
                this.iconValue = 'arrow_upward'
            }
            return this.iconValue
        },
        colorTipo() {
            if (this.tipo == 'Despesa') {
                this.colorValue = 'red'
            } else if (this.tipo == 'Receita') {
                this.colorValue = 'green'
            }
            return this.colorValue
        }
    },
    methods: {
        hiddenContent() {
            this.contentVisible = !this.contentVisible
        }
    }
};
</script>

<template>
    <li class="flex flex-col bg-neutral-200 dark:bg-neutral-700 p-2 rounded-lg">
        <div class="flex justify-between items-center w-full mt-1">
            <div class="flex space-x-2">
                <div class="rounded-full bg-violet-900 text-violet-200 px-4 py-1 text-xs font-semibold">{{ categoria }}</div>
                <div :class="'bg-' + colorTipo + '-900 ' + 'text-' + colorTipo + '-200'" class="rounded-full px-4 py-1 text-xs font-semibold">{{ tipo }}</div>
            </div>
            <div>
                <button @click="hiddenContent" :class="contentVisible ? 'dark:bg-neutral-600' : ''"
                    class="flex rounded-lg p-2 dark:hover:bg-neutral-600"><span
                        class="material-symbols-outlined">more_vert</span></button>
            </div>
        </div>
        <div class="flex justify-between p-2 space-x-2">
            <div class="flex flex-col">
                <div class="text-sm font-semibold text-neutral-200">{{ nome }}</div>
                <div class="text-sm font-light dark:text-neutral-400 text-neutral-500">{{ descricao }}</div>
            </div>
            <div :class="'text-' + colorTipo + '-600 ' + 'dark:text-' + colorTipo + '-400'" class="flex items-center space-x-1 font-semibold text-md min-w-max"><span
                    class="material-symbols-outlined">{{ iconTipo }}</span><span>R$ {{ valor }}</span></div>
        </div>
        <transition name="slide">
            <div v-if="contentVisible" class="flex flex-row-reverse space-x-reverse space-x-4 mt-2 py-2">
                <button class="flex items-center justify-center bg-red-600 rounded-lg p-2 space-x-1"><span
                        class="material-symbols-outlined">delete</span><span>Deletar</span></button>
                <button class="flex items-center justify-center bg-violet-900 rounded-lg p-2 space-x-1"><span
                        class="material-symbols-outlined">edit</span><span>Editar</span></button>
            </div>
        </transition>
    </li>
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