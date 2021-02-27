import React, {createContext, useState} from 'react'

const ChartDataContext = createContext();

const ChartDataProvider = (props) => {

    const [ShoppingCartQuantity, setShoppingCartQuantity] = useState(0);

    return (
        <ChartDataContext.Provider value={{ShoppingCartQuantity, setShoppingCartQuantity}}>
            {props.children}
        </ChartDataContext.Provider>
    )
}
export { ChartDataContext, ChartDataProvider }