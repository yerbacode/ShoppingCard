import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { ChartDataProvider } from "./context/ChartContext";
import { BrowserRouter, Link } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import CategoriesAreLoading from "./components/Categories/Categories";
import { CardContainer, ContainerFlex, GlobalStyle, Header } from './GlobalStyles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <div className="App">
        <ChartDataProvider>
          <Header>
            <ContainerFlex>
              <HamburgerMenu/>
              <span><Link to="/">ShopLogo</Link></span>
              <ShoppingCart />
            </ContainerFlex>
          </Header>
          <CardContainer>
            <CategoriesAreLoading />
          </CardContainer>
        </ChartDataProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;