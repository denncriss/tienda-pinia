<template>
  <header>
    <div class="container header-container">
      <!-- logo -->
      <div class="logo">
        <img class="logo__img" src="https://pinia.vuejs.org/logo.svg" alt="" />
        <span class="logo__text">Tienda Pinia</span>
      </div>
      <div class="icons">
        <div class="icon-bag">
          <IconBag class="icon-bag__svg" />
          <div class="icon-bag__badge">{{ cartBag.length }}</div>
        </div>
      </div>
      <!-- carrito icon -->
    </div>
  </header>
</template>

<script setup>
  import { useMarketStore } from '@/composables/useMarketStore';
  import IconBag from './icons/IconBag.vue';
  const { cartBag } = useMarketStore();
</script>

<style lang="scss" scoped>
  header {
    height: 5rem;
    background-color: #363740;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
  }
  .header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    &__img {
      width: 3rem;
      height: 3rem;
    }
    &__text {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .icon-bag {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      position: relative;
      &__svg {
        width: 100%;
        height: 100%;
      }
      &__badge {
        background-color: rgb(234, 71, 85);
        position: absolute;
        top: -0.5rem;
        right: -0.2rem;
        width: 15px;
        height: 15px;
        font-size: 0.9rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 0.5rem;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
