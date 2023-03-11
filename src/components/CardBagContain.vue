<template>
  <UiModal v-if="hasCheckoutModal">
    <CheckoutTicket class="" @close="hasCheckoutModal = false" @buyProducts="handleBuyProduct" />
  </UiModal>
  <section class="cart">
    <h2 class="section__title">Mi pedido</h2>
    <div class="cart__container">
      <template v-if="cartBag.length > 0">
        <div class="cart__container-products">
          <CardBagProduct v-for="product in cartBag" :key="product" :product="product" />
        </div>
        <div class="divider"></div>
        <button @click="hasCheckoutModal = true" class="btn">completar compra</button>
      </template>
      <ProductsNotFound v-else message="No hay productos aun"> </ProductsNotFound>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import ProductsNotFound from './ProductsNotFound.vue';
  import CardBagProduct from './CardBagProduct.vue';
  import { useMarketStore } from '@/composables/useMarketStore';
  import UiModal from './ui/UiModal.vue';
  import CheckoutTicket from './CheckoutTicket.vue';

  const hasCheckoutModal = ref(false);
  const { cartBag, buyProducts } = useMarketStore();

  const handleBuyProduct = () => {
    buyProducts();
    hasCheckoutModal.value = false;
  };
</script>

<style scoped lang="scss">
  .cart {
    position: sticky;
    top: calc(5rem + 1.2rem);
    &__container {
      background-color: gray;
      background-color: #363740;
      border-radius: 0.3rem;
      padding: 1rem;
      overflow-y: auto;
    }
    &__container-products {
      min-height: 15rem;
    }
  }
</style>
