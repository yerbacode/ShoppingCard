import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import ShoppingCart from "./components/ShoppingCart";
import { ChartDataProvider } from "./context/ChartContext";
import { ProductDataContext } from "./context/ProductsContext";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";
import { useContext, useEffect } from "react";

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
  const { CategoriesLoading, ProductLoading } = useContext(ProductDataContext);

  const CategoriesAreLoading = () => {
    if (CategoriesLoading === true && ProductLoading === true ) {
      return (
        <div>Loading!!!</div>
      ) 
    } else {
      return (
        <Container>
        <Sidebar />
        <Switch>
          <Redirect exact from="/" to="/electronics" />
          <Route path="/:category" component={ItemList} />
        </Switch>
      </Container>
      )
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <ChartDataProvider>
          <Header>
            <Container>
              <span>ShoppingCart</span>
              <ShoppingCart />
            </Container>
          </Header>
          <CardContainer>
            {CategoriesAreLoading()}
          </CardContainer>
        </ChartDataProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;