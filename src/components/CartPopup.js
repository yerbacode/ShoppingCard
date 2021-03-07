import React, { useContext, useEffect, useState } from 'react'
import styled, {css} from 'styled-components'
import { ChartDataContext } from '../context/ChartContext';


const CartPopupWindow = styled.div `
    background: white;
    border: 1px solid grey;
    width: 400px;
    height: 400px;
    position: absolute;
    right: -10px;
    top: 35px;
    padding: 10px;
    color: black;
    margin-top: -20px;
    .CartPopupWindow__Header {
        display: flex;
        justify-content: space-between;
        div:nth-of-type(1) {
            font-size: 17px;
            font-weight: 700;
        }
    }
`;

const ChartItemContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 10px;
    .cart__item_image {
        img {
            width: 50px;
        height: 50px;
        object-fit: contain;
        margin-right: 10px;
        }
    }
    .cart__item_title {
        font-size: 13px;
        text-align: left;
        width: 50%;
    }
    .cart__item_price {
        font-size: 18px;
    }
`;
export default function CartPopup() {

    const { ShoppingCartContent, setCartPopupWindowHover, CartIconHover, CartPopupWindowHover } = useContext(ChartDataContext);


    const CartContentCheck = () => {

        if(Array.isArray(ShoppingCartContent) && ShoppingCartContent.length){

        let CartContentMap = ShoppingCartContent.map((item) => (
            <ChartItemContainer>
                    <div className="cart__item_image"><img src={item.image} alt="Product"/></div>
                    <div className="cart__item_title">{item.title}</div>
                    <div className="cart__item_price">{item.price} zł</div>
            </ChartItemContainer>
        ));

        return (
            <div>{CartContentMap}</div>
        );
        } else {
            return (
                <div>Koszyk jest pusty</div>
            );
        }
    }

    return (
        <CartPopupWindow onMouseEnter={() => setCartPopupWindowHover(true)}  onMouseLeave={() => setCartPopupWindowHover(false)}>
                <div className="CartPopupWindow__Header">
                    <div>
                        Twój koszyk
                    </div>
                    <div>
                        Wartośc koszyka: 
                    </div>
                </div>
                <div className="CartPopupWindow__Content">
                    {CartContentCheck()}
                </div>
            </CartPopupWindow>
    );
}