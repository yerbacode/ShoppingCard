import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import styled from 'styled-components'
import { useEffect, useRef, useState } from "react";
import axios from 'axios'
import ShoppingCart from "./components/ShoppingCart";


const Container = styled.div`
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

const Header = styled.header`
  background: black;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: white;
  ${Container} {
    justify-content: space-between;
    display: flex;
  }
`;
const CardContainer = styled.div`
    width: 100%;
    display: flex;
    ${Container} {
    display: flex;
  }
`;



function App() {
  
  const [loading, setLoading] = useState(false);
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
    <div className="App">
      <Header>
            <Container>
              <span>ShoppingCart</span>
              <ShoppingCart ShoppingCartQuantity={ShoppingCartQuantity}/>
            </Container>
      </Header>
      <CardContainer>
        <Container>
        <Sidebar categories={categories} setSelectedCategory={setSelectedCategory}></Sidebar>
        <ItemList items={items} ShoppingCartQuantity={ShoppingCartQuantity} setShoppingCartQuantity={setShoppingCartQuantity}></ItemList>
        </Container>
      </CardContainer>
    </div>
  );
}

export default App;
