import React, {createContext, useState} from 'react'

const ChartDataContext = createContext();

const ChartDataProvider = (props) => {

    // const [ShoppingCartQuantity, setShoppingCartQuantity] = useState(0);
    const [shoppingCartContent, setShoppingCartContent] = useState([]);
    const [ cartIconHover, setCartIconHover ] = useState(false);
    const [ cartPopupWindowHover, setCartPopupWindowHover ] = useState(false);
    const [ hamburgerClicked, setHamburgerClicked ] = useState(false);

    return (
        <ChartDataContext.Provider value={{ hamburgerClicked, setHamburgerClicked, shoppingCartContent, setShoppingCartContent, cartIconHover, setCartIconHover, cartPopupWindowHover, setCartPopupWindowHover}}>
            {props.children}
        </ChartDataContext.Provider>
    )
}
export { ChartDataContext, ChartDataProvider }