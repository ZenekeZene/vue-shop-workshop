<template>
  <article>
    <ol>
      <li v-for="(productInfo, index) in products" :key="`product-${index}`">
        <productItem :productInfo="productInfo"></productItem>
      </li>
    </ol>
    <p v-if="products.length === 0">Lo lamentamos, no hay productos con esas características&nbsp;&nbsp;🥺</p>
    <li v-for="(product, index) in cart" :key="`cart-${index}`">
      {{ product._id }}
    </li>
  </article>
</template>

<script>
import axios from "axios";
import ProductItem from "@/components/ProductItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Gallery",
  components: {
    ProductItem
  },
  data() {
    return {
      products: []
    }
  },

  computed: {
    ...mapState(['cart']),
  },
  methods: {
    ...mapActions(["getProductsFromCloud"]),
  },
  mounted() {
    this.getProductsFromCloud().then(response => {
      this.products = response.products;
    });
    console.log(this.cart);
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
