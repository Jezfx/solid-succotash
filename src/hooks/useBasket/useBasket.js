import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

import { useProducts } from "hooks/useProducts";

/**
 * Copy all the useBasket Functionality from flower
 * Defo not intending on changing any of that
 */

const BasketContext = createContext({
  addItem: () => {},
  cart: {},
  isOpen: false,
});

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const { getProductById } = useProducts();

  const addItemToBasket = (id) => {
    setBasket([...basket, getProductById(id)]);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addItem: addItemToBasket,
        basketTotal: basket?.length,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

BasketProvider.defaultProps = {
  children: null,
};

BasketProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const useBasket = () => {
  const basket = useContext(BasketContext);
  if (!basket)
    throw new Error("useBasket must be used within a BasketProvider component");
  return basket;
};

export { BasketContext, BasketProvider, useBasket };
