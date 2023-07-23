<script>
import CardWTitle from '../components/CardWTitle.vue';
import Heading from '../components/Heading.vue';
import TransactionItemLista from '../components/TransactionsItemLista.vue';


export default {
  components: {
    CardWTitle,
    Heading,
    TransactionItemLista
  },
  data() {
    return {
      contentVisible: false, 
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
  <Heading title="Movimentações" icon="paid" />
  <CardWTitle title="Filtrar" icon="filter_alt">Filtros</CardWTitle>
  <CardWTitle title="Extrato" icon="list">
    <!-- inicio lsta de movimentações -->
    <div class="w-full px-2 pb-6 pt-2">
      <!-- inicio lista agrupada por data -->
      <ul>
        <li class="flex flex-col space-y-2 mb-3">
          <!-- inicio lista movimentações de data especifica -->
          <div class="text-sm font-bold">22/07/2023</div>
          <ul class="flex flex-col space-y-2">
            <TransactionItemLista
              categoria="Moradia"
              tipo="Despesa"
              nome="Aluguel"
              descricao="Alugal do imóvel, juntamente com condominio."
              valor="700,00"
            />
            <TransactionItemLista 
              categoria="Renda"
              tipo="Receita"
              nome="Salário Anderson"
              descricao="Nota emitida pela AML."
              valor="8500,00"
            />
          </ul>
          <!-- fim lista movimentações de data especifica -->
        </li>
      </ul>
      <!-- fim lista agrupada por data -->
    </div>
    <!-- fim lsta de movimentações -->
  </CardWTitle>
</template>

