import React, { createContext, useState } from "react";

const CartDataContext = createContext();

const CartDataProvider = (props) => {
  // const [ShoppingCartQuantity, setShoppingCartQuantity] = useState(0);
  const [shoppingCartContent, setShoppingCartContent] = useState([]);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <CartDataContext.Provider
      value={{
        hamburgerClicked,
        setHamburgerClicked,
        shoppingCartContent,
        setShoppingCartContent,
      }}
    >
      {props.children}
    </CartDataContext.Provider>
  );
};
export { CartDataContext, CartDataProvider };
