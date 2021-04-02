import React, { createContext, useState } from "react";

const CartDataContext = createContext();

const CartDataProvider = (props) => {
  // const [ShoppingCartQuantity, setShoppingCartQuantity] = useState(0);
  const [shoppingCartContent, setShoppingCartContent] = useState([]);
  const [cartIconHover, setCartIconHover] = useState(false);
  const [cartPopupWindowHover, setCartPopupWindowHover] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <CartDataContext.Provider
      value={{
        hamburgerClicked,
        setHamburgerClicked,
        shoppingCartContent,
        setShoppingCartContent,
        cartIconHover,
        setCartIconHover,
        cartPopupWindowHover,
        setCartPopupWindowHover,
      }}
    >
      {props.children}
    </CartDataContext.Provider>
  );
};
export { CartDataContext, CartDataProvider };
