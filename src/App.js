import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import axios from 'axios'


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
`;
const CardContainer = styled.div`
    width: 100%;
    display: flex;
    div {
      display: flex;
    }
`;



function App() {
  
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(["elo", "elo2"]);
  const [items, setItems] = useState(["elo", "elo2"]);

  useEffect(async () => {
    const categoriesresult = await axios(
      'https://fakestoreapi.com/products/categories',
    );
    setCategories(categoriesresult.data);

    const itemsresult = await axios(
      `https://fakestoreapi.com/products/category/${categories[0]}`,
    );
    setItems(itemsresult.data);
  });



  return (
    <div className="App">
      <Header>
            <Container>
              Shopping Card
            </Container>
      </Header>
      <CardContainer>
        <Container>
        <Sidebar categories={categories}></Sidebar>
        <ItemList items={items}></ItemList>
        </Container>
      </CardContainer>
    </div>
  );
}

export default App;
