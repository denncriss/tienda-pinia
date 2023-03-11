<template>
  <div class="modal">
    <div class="modal__box">
      <slot>modal</slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
    background-color: rgb(42, 43, 51, 0.8);
    &__box {
      min-width: 30rem;
      min-height: 20rem;
      background-color: rgb(42, 43, 51);
      box-shadow: 0px 5px 20px 5px rgba(22, 23, 28, 0.476);
      border: 1px solid rgb(31, 32, 38);
      border-radius: 0.5rem;
      padding: 1rem;
    }
  }
</style>
