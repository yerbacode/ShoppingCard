import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { ChartDataContext } from '../context/ChartContext';
import CartPopup from './CartPopup';


const ShoppingCartContainer = styled.div`
    position: relative;
    margin-right: 7px;
    cursor: pointer;
`;

const CartQuantity = styled.div`
    background: red;
    border-radius: 50px;
    height: 17px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -9px;
    bottom: -4px;
    padding-left: 5px;
    padding-right: 5px;
    span {
        font-size: 13px;
        margin-bottom: 2px;
    }    
`;



export default function ShoppingCart() {

    const { ShoppingCartContent, setShoppingCartContent, setCartIconHover, CartIconHover, CartPopupWindowHover } = useContext(ChartDataContext);

    const QuantityRound = () => {
        if (ShoppingCartContent.length < 100) {
            return <span>{ShoppingCartContent.length}</span>
        }
        return <span>99+</span>;
    }

    const CartPopupShow = () => {
        if (CartIconHover || CartPopupWindowHover) {
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
