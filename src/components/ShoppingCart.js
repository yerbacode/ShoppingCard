import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styled, {css} from 'styled-components'


const ShoppingCartContainer = styled.div`
    position: relative;
    margin-right: 7px;
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

export default function ShoppingCart({ShoppingCartQuantity}) {

    function QuantityRound() {
        if (ShoppingCartQuantity < 100) {
            return <span>{ShoppingCartQuantity}</span>
        }
        return <span>99+</span>;
    }

    return (
        <ShoppingCartContainer>
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            <CartQuantity ShoppingCartQuantity={ShoppingCartQuantity}>{QuantityRound()}</CartQuantity>
        </ShoppingCartContainer>
    )
}
