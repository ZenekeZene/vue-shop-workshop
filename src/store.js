import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    countItemsOnCart: state => state.cart.length,
  },
  mutations: {
    addItemOnCart: (state, payload) => {
      console.log(payload);
      state.cart.push(payload);
    },
    removeItemOnCart: (state, payload) => {
      state.cart = state.cart.filter(item => item.product._id != payload.id);
    },
  },
  actions: {
    getProductsFromCloud({ commit }) {
      return new Promise((resolve, reject) => {
        axios
        .get("http://www.mocky.io/v2/5d1f23b53100003e74ebeaee?delay=100", {})
        .then(response => {
          resolve({
            products:  response.data.products
          });
        }).catch(error => {
            reject(error);
          });
      })
    }
  }
})
