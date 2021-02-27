import axios from 'axios';
import React, {createContext, useEffect, useRef, useState} from 'react'

export const ProductDataContext = createContext();

const ProductDataProvider = (props) => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories);
    const [items, setItems] = useState([]);
    const [ShoppingCartQuantity, setShoppingCartQuantity] = useState(0);
  
    const fetchCategories = async () => {
      const { data } = await axios('https://fakestoreapi.com/products/categories');
      return data;
    };
   
    const fetchProducts = async (category) => {
      const response = await axios(`https://fakestoreapi.com/products/category/${category}`);
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
      if(inited.current) {
        fetchProducts(selectedCategory);
      } else {
        inited.current = selectedCategory;
      }
    },[selectedCategory]);
  
    useEffect(() => {
      console.log(ShoppingCartQuantity);
    });



    return (
        <ProductDataContext.Provider value={{categories, selectedCategory, items, ShoppingCartQuantity, setShoppingCartQuantity, setItems, setSelectedCategory}}>
            {props.children}
        </ProductDataContext.Provider>
    )
}