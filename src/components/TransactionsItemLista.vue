<template>
    <li class="flex flex-col bg-neutral-200 dark:bg-neutral-700 p-2 rounded-lg">
        <div class="flex justify-between items-center w-full mt-1">
            <div class="flex space-x-2">
                <div class="rounded-full bg-violet-600 text-violet-100 px-4 py-1 text-xs font-semibold">{{ categoria }}</div>
                <div :class="tipoFormat.label" class="rounded-full px-4 py-1 text-xs font-semibold">{{ tipo }}</div>
            </div>
            <div>
                <button @click="hiddenContent" :class="contentVisible ? 'dark:bg-neutral-600' : ''"
                    class="flex rounded-lg p-2 dark:hover:bg-neutral-600 space-x-1"><span
                        class="material-symbols-outlined">edit_note</span><span class="hidden md:block">Editar</span></button>
            </div>
        </div>
        <div class="flex justify-between p-2 space-x-2">
            <div class="flex flex-col">
                <div class="text-sm font-semibold text-neutral-200">{{ nome }}</div>
                <div class="text-sm font-light dark:text-neutral-400 text-neutral-500">{{ descricao }}</div>
            </div>
            <div class="flex items-center space-x-1 font-semibold text-md min-w-max">
                <span :class="tipoFormat.colorIcon" class="material-symbols-outlined font-black">{{ tipoFormat.icon }}</span>
                <span>R$ {{ valor }}</span>
            </div>
        </div>
        <transition name="slide">
            <div v-if="contentVisible" class="flex flex-col mt-2 py-2">
                    <div class="flex flex-col space-y-3">
                        <FormInput 
                            label="Nome"
                        />
                        <FormInput 
                            label="Valor"
                        />
                        <FormSelect 
                            label="Categoria"
                            :options="categories" 
                            @selected="onCategorySelected"
                            :hasError=false
                            
                        />
                        <FormRadioGroup 
                            v-model="selectedType" 
                            :options="types" 
                        />
                        <FormSliderButton />
                        <p class="text-white">Opção selecionada: {{ selectedType }}</p>
                    </div>
                <div class="flex flex-row-reverse space-x-reverse space-x-4 mt-2 py-2">
                    <button class="flex items-center justify-center bg-red-600 rounded-lg p-2 space-x-1"><span
                            class="material-symbols-outlined">delete</span><span></span></button>
                    <button class="flex items-center justify-center bg-green-600 rounded-lg p-2 space-x-1"><span
                            class="material-symbols-outlined">save</span><span></span></button>
                </div>
            </div>
        </transition>
    </li>
</template>

<script>
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';
import FormRadioGroup from './FormRadioGroup.vue';
import FormSliderButton from './FormSliderButton.vue';
export default {
    components: {
        FormInput,
        FormSelect,
        FormRadioGroup,
        FormSliderButton,
    },
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
            iconTipo: '',
            labelTipo: '',
            colorIconTipo: '',
            categories: [
                "Categoria 1",
                "Categoria 2",
                "Categoria 3",
            ],
            types: [
                'receita', 
                'despesa', 
                'transferencia',
            ],
            selectedType: '',
        }
    },
    computed: {
        tipoFormat() {
            if (this.tipo === 'Despesa') {
                this.iconTipo = 'remove', 
                this.colorIconTipo = 'text-red-600'
                this.labelTipo = 'bg-red-600 text-red-100'
            } else if (this.tipo === 'Receita') {
                this.iconTipo = 'add', 
                this.colorIconTipo = 'text-green-600'
                this.labelTipo = 'bg-green-600 text-green-100'
            } else if (this.tipo === 'Transferencia') {
                this.iconTipo = 'swap_vert', 
                this.colorIconTipo = 'text-blue-600'
                this.labelTipo = 'bg-blue-600 text-blue-100'
            } 

            return {
                icon: this.iconTipo,
                colorIcon: this.colorIconTipo,
                label: this.labelTipo,
            }      
        },
    },
    methods: {
        hiddenContent() {
            this.contentVisible = !this.contentVisible
        },
        onCategorySelected(option) {
            console.log("Selected:", option);
            // Faça o que quiser com a opção selecionada
        },

    }
};
</script>

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