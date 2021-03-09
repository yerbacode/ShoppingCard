import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChartDataContext } from '../context/ChartContext';


const CartPopupWindow = styled.div `
    background: white;
    border: 1px solid grey;
    width: 500px;
    height: 400px;
    position: absolute;
    right: -10px;
    top: 35px;
    padding: 10px;
    color: black;
    margin-top: -20px;
    padding-left: 20px;
    .CartPopupWindow__Header {
        display: grid;
        grid-template-columns: 20% 50% 15% 15%;
        height: 40px;
        padding-right: 20px;
        div:nth-of-type(1) {
            font-size: 17px;
            font-weight: 700;
            width: max-content;
        }

        div:nth-of-type(4) {
            span {
                display: block;
            }
        }
    }
    .CartPopupWindow__Content {
        overflow-y: auto;
        max-height: 330px;
    }
`;

const ChartItemContainer = styled.div `
    display: grid;
    grid-template-columns: 20% 50% 15% 15%;
    height: 100px;
    margin-top: 10px;
    padding-right: 20px;
    padding-left: 20px;
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
    }
    .cart__item_amount {
        text-align: center;
    }
    .cart__item_price {
        font-size: 18px;
        width: max-content;
    }
`;
export default function CartPopup() {

    const { ShoppingCartContent, setShoppingCartContent, setCartPopupWindowHover } = useContext(ChartDataContext);


    const CartContentCheck = () => {

        if(Array.isArray(ShoppingCartContent) && ShoppingCartContent.length){

        let arr2 = ShoppingCartContent.reduce( (a,b) => {
            let i = a.findIndex( x => x.title === b.title);
            return i === -1 ? 
            a.push({ title : b.title, price : b.price, image : b.image, times : 1 }) : a[i].times++, a;
        }, []);

        const priceRound = (price, times) => {
            if (price * times < 9999) {
                return price * times
            } else {
                return "9999+"
            }
        }

        const removeItem = (item) => {
            setShoppingCartContent(
              ShoppingCartContent.filter(
                (e) => e.title !== item
              )
            );
          };

        let CartContentMap = arr2.map((item, id) => (
            <ChartItemContainer>
                    <div className="cart__item_image"><img src={item.image} alt="Product"/></div>
                    <div className="cart__item_title">{item.title}</div>
                    <div className="cart__item_amount">{item.times}</div>
                    <div className="cart__item_price">{priceRound(item.price, item.times)} zł</div>
                    <div className="cart__item_remove" onClick={() => removeItem(item.title)}><button>x</button></div>
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
                    <div></div>
                    <div>Ilość:</div>
                    <div>
                        Wartość <span>koszyka:</span> 
                    </div>
                </div>
                <div className="CartPopupWindow__Content">
                    {CartContentCheck()}
                </div>
            </CartPopupWindow>
    );
}