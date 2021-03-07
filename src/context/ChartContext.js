import React, {createContext, useState} from 'react'

const ChartDataContext = createContext();

const ChartDataProvider = (props) => {

    const [ShoppingCartQuantity, setShoppingCartQuantity] = useState(0);
    const [ShoppingCartContent, setShoppingCartContent] = useState([]);
    const [ CartIconHover, setCartIconHover ] = useState(false);
    const [ CartPopupWindowHover, setCartPopupWindowHover ] = useState(false);

    return (
        <ChartDataContext.Provider value={{ShoppingCartQuantity, setShoppingCartQuantity, ShoppingCartContent, setShoppingCartContent, CartIconHover, setCartIconHover, CartPopupWindowHover, setCartPopupWindowHover}}>
            {props.children}
        </ChartDataContext.Provider>
    )
}
export { ChartDataContext, ChartDataProvider }