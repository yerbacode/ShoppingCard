import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ProductDataContext = createContext();

const ProductDataProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories);
  const [items, setItems] = useState([]);
  const [ProductLoading, setProductLoading] = useState(true);
  const [CategoriesLoading, setCategoriesLoading] = useState(true);

  const fetchCategories = async () => {
    setCategoriesLoading(true);
    const { data } = await axios(
      "https://fakestoreapi.com/products/categories"
    );
    setCategoriesLoading(false);
    return data;
  };
  const [pathObj, setpathObj] = useState("");

  const setPathObjFromComp = (path) => {
    setpathObj(path);
  };

  const fetchProducts = async (category) => {
    setProductLoading(true);
    const response = await axios(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setItems(response.data);
    setProductLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      const _categories = await fetchCategories();
      setCategories(_categories);
    }
    fetchData();
  }, []);


  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <ProductDataContext.Provider
      value={{
        categories,
        items,
        setItems,
        selectedCategory,
        ProductLoading,
        CategoriesLoading,
        setSelectedCategory,
        setPathObjFromComp,
        pathObj
      }}
    >
      {props.children}
    </ProductDataContext.Provider>
  );
};

export { ProductDataContext, ProductDataProvider };
