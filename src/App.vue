<template>
  <HeaderShop />
  <ContainerShop>
    <CardMarketContain />
    <CardBagContain />
  </ContainerShop>
</template>

<script setup>
  import { onMounted } from 'vue';
  import HeaderShop from './components/HeaderShop.vue';
  import ContainerShop from './components/ContainerShop.vue';
  import CardMarketContain from './components/CardMarketContain.vue';
  import CardBagContain from './components/CardBagContain.vue';
  import { useMarketStore } from '@/composables/useMarketStore';
  const { getProducts } = useMarketStore();

  onMounted(() => {
    getProducts();
  });
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    position: relative;
    font-weight: normal;
  }
  /* utility */
  .dev {
    border: 1px solid red;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Quicksand', sans-serif;
    background-color: rgb(42, 43, 51);
    color: white;
  }
  .container {
    max-width: 75rem;
    margin: 0 auto;
  }
  .section__title {
    margin-bottom: 1rem;
    font-weight: 800;
    color: rgb(73, 231, 94);
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    background-color: rgb(234, 71, 85);
    color: white;
    padding: 0 1.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    cursor: pointer;
  }
  .divider {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.09);
    margin: 0.8rem 0;
  }
</style>
