<template>
  <div class="product">
    <div class="product__details">
      <div class="product__img-box">
        <img class="product__img" :src="product.imgUrl" :alt="product.name" />
      </div>
      <div class="product__details-box">
        <div class="product__quantity">
          <span>x{{ product.cant }}</span>
        </div>
        <p class="product__name">{{ product.name }}</p>
      </div>
    </div>
    <div>
      <div class="action">
        <button class="action__delete" @click="removeProduct(product.id)">
          <IconDelete />
        </button>
        <button class="action__remove" @click="decreaseQuantityProduct(product.id)">
          <IconMinus />
        </button>
        <button
          class="action__add"
          :disabled="!productInInventory(product.id)"
          @click="increaseQuantityProduct(product.id)">
          <IconAdd />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import IconMinus from './icons/IconMinus.vue';
  import IconAdd from './icons/IconAdd.vue';
  import { useMarketStore } from '@/composables/useMarketStore';
  import IconDelete from './icons/IconDelete.vue';
  defineProps({
    product: Object,
  });
  const { removeProduct, decreaseQuantityProduct, increaseQuantityProduct, productInInventory } =
    useMarketStore();
</script>
<style lang="scss" scoped>
  .product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    &__quantity {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.5rem;
      margin-bottom: 0.3rem;
      border-radius: 0.3rem;
      background-color: rgba(255, 255, 255, 0.127);
      color: white;
      font-size: 1.1rem;
      font-weight: 900;
      padding: 0.2rem 0;
    }
    &__details {
      display: flex;
      align-items: center;
    }
    &__name {
      font-size: 1rem;
      font-weight: bold;
      text-transform: capitalize;
    }

    &__img-box {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      padding: 0.5rem;
      margin: 0.5rem;
      background-color: rgba(255, 255, 255, 0.128);
      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__options {
      display: flex;
      align-items: center;
    }
    &__add {
      margin-left: 0.3rem;
      height: 100%;
      width: 2.3rem;
      height: 2.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.3rem;
      background-color: rgba(255, 255, 255, 0.128);
      border-radius: 0.2rem;
      border: none;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: white;
      }
    }
    &__remove {
      margin-left: 0.3rem;
      width: 2.3rem;
      height: 2.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.3rem;
      background-color: rgba(255, 255, 255, 0.128);
      border-radius: 0.2rem;
      border: none;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: white;
      }
    }
    &__delete {
      margin-left: 0.3rem;
      height: 100%;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.3rem;
      background-color: rgba(255, 131, 131, 0.128);
      border-radius: 0.2rem;
      border: none;
      svg {
        width: 1.2rem;
        height: 1.2rem;
        color: rgb(228, 94, 94);
      }
    }
  }
</style>
