import { defineStore } from 'pinia';
import productsDB from '../data/data.json';

export const useMarket = defineStore('market', {
  state: () => ({
    products: [],
    cartBag: [],
  }),
  getters: {
    // total de productos
    totalPriceCart: (state) => {
      return state.cartBag.reduce((acc, product) => acc + product.price.value * product.cant, 0);
    },
    // productos en el inventario
    productsInInventory: (state) => {
      return state.products.map((product) => {
        let cant = state.cartBag.some((item) => item.id === product.id)
          ? product.cant - state.cartBag.find((item) => item.id === product.id).cant
          : product.cant;
        return { ...product, cant };
      });
    },
    productInInventory: (state) => {
      return (productId) => {
        let product = state.productsInInventory.find((product) => product.id == productId);
        return product && product.cant > 0 ? true : false;
      };
    },
  },
  actions: {
    // obtener los productos del back
    getProducts() {
      this.products = productsDB;
    },
    // agregar un producto
    addProduct(product, cant = 1) {
      const productCartIndex = this.cartBag.findIndex(
        (productCart) => productCart.id == product.id
      );
      if (productCartIndex >= 0) {
        this.increaseQuantityProduct(product.id, cant);
      } else {
        this.cartBag.push({ ...product, cant });
      }
    },
    // aumentar la cantidad
    increaseQuantityProduct(productId, cant = 1) {
      const productIndex = this.cartBag.findIndex((product) => product.id === productId);
      if (productIndex >= 0 && this.productInInventory(productId))
        this.cartBag[productIndex].cant += cant;
    },

    // disminuir la cantidad
    decreaseQuantityProduct(productId, cant = 1) {
      const productCartIndex = this.cartBag.findIndex((product) => product.id === productId);
      this.cartBag[productCartIndex].cant > 1
        ? (this.cartBag[productCartIndex].cant -= cant)
        : this.removeProduct(productId);
    },

    // eliminar el producto
    removeProduct(productId) {
      this.cartBag = this.cartBag.filter((product) => product.id != productId);
    },

    clearAllCart() {
      this.cartBag = [];
    },

    buyProducts() {
      this.products = this.productsInInventory;
      this.clearAllCart();
    },
  },
});
