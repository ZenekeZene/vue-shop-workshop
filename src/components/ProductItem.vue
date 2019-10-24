<template>
  <article class="item">
    <img class="item__image" />
    <section class="item__info">
      <h2><!-- name --></h2>
      <p><!-- description_short --></p>
      <p class="item__size"><!-- size --></p>
      <p class="item__price"><!-- price --></p>
    </section>
    <span class="on-sale">SALE</span>
  </article>
</template>

<script>
export default {
  name: 'ProductItem',
};
</script>
<style lang="scss">
.item {
  position: relative;
  padding: 1rem;

  &__info {
    padding: 0 1rem;
  }

  h2 {
    margin: 0;
  }

  &__image {
    width: 100%;
    max-width: 320px;
    border-radius: 4px;
  }

  $self: &;
  &#{&}--detail {
    display: flex;
  }

  &__price {
    font-weight: 700;
  }

  &__size {
    padding: 0.1rem 0.8rem;
    color: #2f2f2f;
  }
}

.on-sale {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  background-color: #ffe5ae;
  transform: rotate(-90deg) translateX(-46%) translateY(-63%);
}
</style>
