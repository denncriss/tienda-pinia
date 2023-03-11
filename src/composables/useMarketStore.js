import { useMarket } from '../stores/market';
import { storeToRefs } from 'pinia';

export function useMarketStore() {
  const {
    availableProducts,
    cartBag,
    loading,
    products,
    totalPriceCart,
    error,
    productsInInventory,
    productInInventory,
  } = storeToRefs(useMarket());
  const {
    getProducts,
    addProduct,
    decreaseQuantityProduct,
    increaseQuantityProduct,
    removeProduct,
    clearAllCart,
    buyProducts,
  } = useMarket();

  return {
    error,
    availableProducts,
    productsInInventory,
    productInInventory,
    cartBag,
    loading,
    products,
    totalPriceCart,
    addProduct,
    getProducts,
    decreaseQuantityProduct,
    increaseQuantityProduct,
    removeProduct,
    clearAllCart,
    buyProducts,
  };
}
