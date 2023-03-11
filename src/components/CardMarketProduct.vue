<template>
  <section class="product">
    <div class="product__header">
      <h2 class="product__name">{{ product.name }}</h2>
      <span class="product__cant"> {{ product.cant }}</span>
    </div>
    <div class="product__container">
      <div class="product__list" v-if="product.cant > 0">
        <div v-for="item in productDisplayedNumber" :key="item" class="product__item">
          <img :src="product.imgUrl" :alt="product.imgName" />
        </div>
        <div v-show="hiddenProductsNumber" class="product__rest">
          <span>+{{ hiddenProductsNumber }}</span>
          <p></p>
        </div>
      </div>
      <ProductsNotFound v-else message="upps!! se agotaron 😥" />
    </div>
    <div class="divider"></div>
    <div class="product__actions">
      <p class="product__price">{{ product.price.currency }}{{ product.price.value }}</p>
      <button :disabled="product.cant <= 0" class="product__add" @click="addProduct(props.product)">
        <span>{{ product.cant <= 0 ? 'Agotado' : 'Agregar' }}</span>
        <IconBag height="20" />
      </button>
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue';
  import { useMarketStore } from '@/composables/useMarketStore';
  import IconBag from './icons/IconBag.vue';
  import ProductsNotFound from './ProductsNotFound.vue';
  const props = defineProps({
    product: Object,
    productMaxView: Number,
  });
  const { addProduct } = useMarketStore();

  const productDisplayedNumber = computed(() => {
    if (props.product.cant == props.productMaxView + 1) return props.productMaxView + 1;
    return props.product.cant >= props.productMaxView ? props.productMaxView : props.product.cant;
  });

  const hiddenProductsNumber = computed(() => {
    return props.product.cant - productDisplayedNumber.value;
  });
</script>

<style lang="scss" scoped>
  .product {
    display: flex;
    flex-direction: column;
    background-color: #363740;
    border-radius: 0.3rem;
    padding: 1rem 1.2rem;
    &__container {
      min-height: 14rem;
      flex-grow: 1;
    }
    &__list {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(4, minmax(3rem, 1fr));
    }
    &__header {
      height: auto;
      flex: 1;
      max-height: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.7rem;
    }
    &__name {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: capitalize;
    }
    &__cant {
      font-size: 1.2rem;
      font-weight: bold;
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      padding: 0.5rem;
      background-color: rgba(255, 255, 255, 0.128);
      img {
        width: 3rem;
        height: 3rem;
      }
    }
    &__rest {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      padding: 0.5rem;
      background-color: rgba(255, 255, 255, 0.128);
      span {
        font-size: 1.5rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.603);
      }
    }
    &__actions {
      display: flex;
      align-items: center;

      justify-content: space-between;
    }
    &__price {
      display: flex;
      align-items: center;
      background-color: rgba(73, 231, 94, 0.128);
      font-size: 1rem;
      font-weight: 600;
      font-size: 1.2rem;
      padding: 0rem 1rem;
      border-radius: 0.2rem;
      color: rgb(73, 231, 94);
      height: 2.5rem;
    }
    &__input-cant {
      border-radius: 0.3rem;
      padding: 0 0 0 0.5rem;
      border: none;
      font-size: 1rem;
      width: 5.7rem;
      height: 2.4rem;
      &:focus {
        outline: none;
      }
    }
    &__add {
      display: flex;
      align-items: center;
      height: 2.5rem;
      margin-left: 1rem;
      background-color: rgb(234, 71, 85);
      color: white;
      padding: 0 1.5rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      & span {
        font-weight: 600;
        margin-right: 0.4rem;
      }
    }
  }
</style>
