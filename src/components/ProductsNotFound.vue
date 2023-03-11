<template>
  <div class="no-products">
    <div class="no-products__icon">
      <slot name="icon" />
    </div>
    <div class="no-products__title">
      {{ message ?? 'not found' }}
    </div>
  </div>
</template>

<script setup>
  defineProps({
    message: String,
  });
</script>

<style scoped lang="scss">
  .no-products {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px dashed #505159;
    padding: 1rem;
    min-height: 14rem;
    &__icon {
      width: 5rem;
      &:first-child {
        color: #82848f;
        width: 5rem;
      }
    }
    &__title {
      margin-top: 0.2rem;
      font-size: 1rem;
      font-weight: 500;
      color: #82848f;
    }
  }
</style>
