<template>
  <article>
    <ol class="gallery" v-if="productsFiltered.length">
      <li v-for="(productInfo, index) in productsFiltered" :key="`product-${index}`">
        <router-link :to="{ name: 'shopSingle', params: { id: productInfo._id }}" class="link">
          <product-item :product-info="productInfo" :isMini="true"></product-item>
        </router-link>
      </li>
    </ol>
    <p
      v-if="productsFiltered.length == 0"
    >Lo lamentamos, no hay productos con esas características&nbsp;&nbsp;🥺</p>
  </article>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem.vue";
import products from '../assets/products.js';

export default {
  name: "Gallery",
  components: {
    ProductItem
  },
  props: {
    rangePriceSelected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      products: require('../assets/products.js'),
    }
  },
  computed: {
    productsFiltered() {
      return this.products.filter(product => {
        const priceCleaned = parseFloat(product.price.replace("$", ""));
        return priceCleaned > this.rangePriceSelected[0] && priceCleaned < this.rangePriceSelected[1];
      })
    },
  },
};
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 33.33%);
  max-width: 45rem;
  margin: 1rem auto;
  padding: 0;
  list-style: none;

  @media (max-width: 740px) {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  }

  li {
    position: relative;

    &:hover {
      img {
        transform: scale(1.02);
        transition: all 250ms ease-in-out;
      }
    }
  }
}

.link {
  display: block;
  width: 100%;
  height: 100%;
  color: initial;
  text-decoration: none;
}
</style>
