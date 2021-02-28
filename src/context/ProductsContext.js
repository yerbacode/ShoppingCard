import axios from "axios";
import React, { createContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDataContext = createContext();

const ProductDataProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories);
  const [items, setItems] = useState([]);
  const fetchCategories = async () => {
    const { data } = await axios(
      "https://fakestoreapi.com/products/categories"
    );
    return data;
  };
  const [pathObj, setpathObj] = useState("");

  const setPathObjFromComp = (path) => {
    setpathObj(path)
    console.log('ProductsContext:' + pathObj);
  }

  const fetchProducts = async (category) => {
    const response = await axios(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setItems(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    async function fetchData() {
      const _categories = await fetchCategories();
      setCategories(_categories);
      await fetchProducts(_categories[0]);
    }
    fetchData();
  }, []);

  const inited = useRef(null);

  useEffect(() => {
    if (inited.current) {
      fetchProducts(selectedCategory);
    } else {
      inited.current = selectedCategory;
    }
  }, [selectedCategory]);

  return (
    <ProductDataContext.Provider
      value={{
        categories,
        items,
        setItems,
        selectedCategory,
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
