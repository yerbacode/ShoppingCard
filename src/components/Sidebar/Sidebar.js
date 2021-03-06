import React, { useContext } from "react";
import { ProductDataContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";
import { CartDataContext } from "../../context/CartContext";
import {
  SidebarCategoriesList,
  SidebarHeader,
  StyledSidebar,
} from "./SidebarStyles";

const Sidebar = () => {
  const { setHamburgerClicked, hamburgerClicked } = useContext(CartDataContext);
  const { categories, selectedCategory } = useContext(ProductDataContext);

  const categoriesList = categories.map((category, index) => {
    return (
      <li key={"category" + index}>
        <Link
          to={`/categories?name=${category}`}
          onClick={() => {
            setHamburgerClicked(false);
          }}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category}
        </Link>
      </li>
    );
  });

  return (
    <StyledSidebar hamburgerClicked={hamburgerClicked}>
      <SidebarHeader>Categories</SidebarHeader>
      <SidebarCategoriesList>{categoriesList}</SidebarCategoriesList>
    </StyledSidebar>
  );
};

export default Sidebar;
