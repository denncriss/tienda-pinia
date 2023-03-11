<template>
  <div class="sections-container container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .sections-container {
    display: grid;
    grid-template-columns: 1fr minmax(10rem, 24rem);
    gap: 2rem;
    padding: 1.2rem;
    align-items: start;
  }
</style>
