import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import styled from 'styled-components'
import { useEffect, useRef, useState } from "react";
import axios from 'axios'
import ShoppingCart from "./components/ShoppingCart";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";
import ProductDataProvider from './context/ProductsContext';

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
  


  return (
    <ProductDataProvider>
      <div className="App">
        <Header>
              <Container>
                <span>ShoppingCart</span>
                <ShoppingCart/>
              </Container>
        </Header>
        <CardContainer>
          <Container>
          <Sidebar/>
          <ItemList/>
          </Container>
        </CardContainer>
      </div>
      </ProductDataProvider>
  );
}

export default App;