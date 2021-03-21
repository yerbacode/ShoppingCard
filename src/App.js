import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import styled, { createGlobalStyle } from "styled-components";
import ShoppingCart from "./components/ShoppingCart";
import { ChartDataProvider } from "./context/ChartContext";
import { ProductDataContext } from "./context/ProductsContext";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import Loader from "./components/Loader";

const GlobalStyle = createGlobalStyle`

`;
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
  background: #f6f6f6;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #1f1f1f;
  ${Container} {
    justify-content: space-between;
    display: flex;
    align-items: center;
    @media (max-width: 810px) {
      width: 100%;
    }
    span {
      a {
      text-decoration: none;
      color: #1f1f1f;
    }
    }
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
  const { CategoriesLoading } = useContext(ProductDataContext);

  const CategoriesAreLoading = () => {
    if (CategoriesLoading === true ) {
      return (
        <Loader/>
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
      <GlobalStyle/>
      <div className="App">
        <ChartDataProvider>
          <Header>
            <Container>
              <HamburgerMenu/>
              <span><Link to="/">ShopLogo</Link></span>
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