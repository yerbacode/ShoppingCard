import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ChartDataContext } from '../../context/ChartContext';
import CartPopup from '../CartPopup/CartPopup';
import { ShoppingCartContainer, CartQuantity } from './ShoppingCartStyles';


const ShoppingCart = () => {

    const { shoppingCartContent, setCartIconHover, cartIconHover, cartPopupWindowHover } = useContext(ChartDataContext);

    const QuantityRound = () => {
        if (shoppingCartContent.length < 100) {
            return <span>{shoppingCartContent.length}</span>
        }
        return <span>99+</span>;
    }

    const CartPopupShow = () => {
        if (cartIconHover || cartPopupWindowHover) {
            return (
                <CartPopup/>
            )
        }
    }

    return (
        <ShoppingCartContainer onMouseEnter={() => setCartIconHover(true)}  onMouseLeave={() => setCartIconHover(false)}>
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            <CartQuantity>{QuantityRound()}</CartQuantity>
            {CartPopupShow()}
        </ShoppingCartContainer>
    )
}

export default ShoppingCart;