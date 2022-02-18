import { useCallback, useState } from "react";
import productsData from "../../data/products.json";
import { getFirstTwelve } from "./useProducts.utils";

/**
 * Hook to parse query params from the location
 */
export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(() => {
    const firstTwelveProducts = getFirstTwelve(productsData);
    setProducts(firstTwelveProducts);
  }, []);

  const toggleProductModal = (id) => {
    console.log("show ", id);
  };

  const getProductById = (id) => {
    return productsData[0];
  };

  const onIncreaseQuantity = () => {};
  const onDecreaseQuantity = () => {};

  return {
    fetchProducts,
    getProductById,
    toggleProductModal,
    products: products,
    onIncreaseQuantity: onIncreaseQuantity,
    onDecreaseQuantity: onDecreaseQuantity,
  };
};
