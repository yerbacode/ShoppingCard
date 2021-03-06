import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { ProductDataContext } from "../../context/ProductsContext";
import Loader from "../Loader/Loader";
import Sidebar from "../Sidebar/Sidebar";
import ItemList from "../ItemList/ItemList";
import { ContainerFlex } from "../../GlobalStyles";

const Categories = () => {
  const { CategoriesLoading } = useContext(ProductDataContext);

  if (CategoriesLoading) {
    return <Loader />;
  } else {
    return (
      <ContainerFlex>
        <Sidebar />
        <Switch>
          <Redirect exact from="/" to="/categories?name=electronics" />
          <Route path="/:category" component={ItemList} />
        </Switch>
      </ContainerFlex>
    );
  }
};

export default Categories;
