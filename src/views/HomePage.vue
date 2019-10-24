<template>
  <main class="page-home">
    <article class="filters">
      <section class="filters__price">
        <p>Filter by price</p>
        <!-- vue-slider (vendor) -->
        <span><!-- rangePrice[0] -->-</span>
        <span><!-- rangePrice[1] --></span>
      </section>
    </article>
    <gallery></gallery>
  </main>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  max-width: 17rem;
  margin-left: auto;
  padding: 1rem;
  text-align: left;
  box-sizing: border-box;

  &__price {
    margin-bottom: 1rem;
  }
}

.vue-slider {
  margin-bottom: 2rem;
}

p {
  font-weight: 700;
}
</style>
