<template>
  <section>
    <div class="ticket">
      <div class="description">
        <h2 class="ticket__name">Tienda Pinia</h2>
        <p>dirección: Lorem Ipsum, 1432</p>
        <p>tel: +594 56457845</p>
        <p>date: 01/10/2022 14:30</p>
        <p
          :style="{
            fontSize: '0.8rem',
          }">
          @denncriss
        </p>
      </div>
      <div
        class="divider"
        :style="{ backgroundColor: 'rgba(25, 25, 25, 0.669)', margin: '0.6rem 0' }"></div>
      <div class="table">
        <!-- product name -->
        <div class="product">
          <p class="table__title">Producto</p>
          <div v-for="item in cartBag" :key="item.id">
            <p>
              {{ item.name }}
            </p>
          </div>
        </div>
        <div class="quantity">
          <p class="table__title">cant.</p>
          <div v-for="item in cartBag" :key="item.id">
            <p>
              {{ item.cant }}
            </p>
          </div>
        </div>
        <div class="price">
          <p class="table__title">precio/U.</p>
          <div v-for="item in cartBag" :key="item.id">
            <p class="price__value">
              {{ item.price.currency }}
              {{ item.price.value }}
            </p>
          </div>
        </div>
        <div class="price">
          <p class="table__title">precio/T.</p>
          <div v-for="item in cartBag" :key="item.id">
            <p class="price__value">
              {{ item.price.currency }}
              {{ totalPrice(item.price.value * item.cant) }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="divider"
        :style="{ backgroundColor: 'rgba(25, 25, 25, 0.669)', margin: '0.6rem 0' }"></div>
      <div>
        <div class="ticket__total-price">
          <span class="ticket__total-price--text">precio total:</span>
          <span class="ticket__total-price--value">${{ totalPrice(totalPriceCart) }}</span>
        </div>
        <p class="ticket__message">--------------gracias por su compra--------------</p>
      </div>
    </div>
    <div class="action">
      <button class="action__btn-close" @click="$emit('close')">
        <IconClose height="20" />
      </button>
      <button class="action__btn-success" @click="$emit('buyProducts')">completar la compra</button>
    </div>
  </section>
</template>

<script setup>
  import IconClose from './icons/IconClose.vue';
  import { computed } from 'vue';
  import { useMarketStore } from '@/composables/useMarketStore';
  const { cartBag, totalPriceCart } = useMarketStore();

  defineEmits(['close', 'buyProducts']);

  const totalPrice = computed(() => {
    return (tPrice) => {
      return tPrice.toFixed(2);
    };
  });
</script>

<style scoped lang="scss">
  .table {
    display: grid;
    grid-template-columns: 1fr repeat(3, auto);
    grid-gap: 1rem;
    text-align: left;
    font-weight: 400;
    &__title {
      font-weight: 700;
      padding-bottom: 0.2rem;
    }
  }
  .ticket {
    color: black;
    font-weight: 700;
    background-color: rgb(178, 180, 189);
    padding: 1.2rem;
    text-align: center;
    &__name {
      font-weight: 700;
    }
    &__total-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      &--text,
      &--value {
        font-weight: 700;
      }
    }
    &__message {
      padding: 1rem;
      margin-top: 1rem;
      font-weight: 500;
      background: rgba(39, 35, 35, 0.09);
    }
  }
  .price {
    text-align: end;
  }
  .quantity {
    text-align: center;
  }
  .action {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    &__btn-close {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      background-color: rgb(220, 218, 218);
      color: rgb(19, 19, 19);
      padding: 0 1.5rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
    }
    &__btn-success {
      width: 100%;
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
      cursor: pointer;
    }
  }
</style>
