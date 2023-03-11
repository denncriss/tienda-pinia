<template>
  <section>
    <h2 class="section__title">Productos</h2>
    <div class="cards-container">
      <CardMarketProduct
        v-for="product in productsInInventory"
        :key="product.id"
        :product="product"
        :productMaxView="11" />
    </div>
  </section>
</template>

<script setup>
  import CardMarketProduct from './CardMarketProduct.vue';
  import { useMarketStore } from '@/composables/useMarketStore';
  const { productsInInventory } = useMarketStore();
</script>

<style scoped lang="scss">
  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.7rem;
  }
</style>
