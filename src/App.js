import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { CartDataProvider } from "./context/CartContext";
import { BrowserRouter, HashRouter, Link } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import CategoriesAreLoading from "./components/Categories/Categories";
import {
  CardContainer,
  ContainerFlex,
  GlobalStyle,
  Header,
} from "./GlobalStyles";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
      <GlobalStyle />
      <div className="App">
        <CartDataProvider>
          <Header>
            <ContainerFlex>
              <HamburgerMenu />
              <Link to="/">ShopLogo</Link>
              <ShoppingCart />
            </ContainerFlex>
          </Header>
          <CardContainer>
            <CategoriesAreLoading />
          </CardContainer>
        </CartDataProvider>
      </div>
    </HashRouter>
  );
}

export default App;
