import React, { useContext } from "react";
import { CartDataContext } from "../../context/CartContext";
import { Burger } from "./HamburgerMenuStyles";

const HamburgerMenu = () => {
  const { hamburgerClicked, setHamburgerClicked } = useContext(CartDataContext);

  return (
    <Burger
      hamburgerClicked={hamburgerClicked}
      onClick={() => {
        setHamburgerClicked(!hamburgerClicked);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </Burger>
  );
};

export default HamburgerMenu;
