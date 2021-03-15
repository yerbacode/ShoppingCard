import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChartDataContext } from '../context/ChartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import LinesEllipsis from "react-lines-ellipsis";


const CartPopupWindow = styled.div `
    background: white;
    border: 1px solid #e0e0e0;
    width: 500px;
    height: 400px;
    position: absolute;
    right: -10px;
    top: 35px;
    padding: 10px;
    color: black;
    margin-top: -20px;
    padding-left: 20px;
    @media (max-width: 501px) {
        width: 84vw;
    }
    .CartPopupWindow__Header {
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 15%;
        height: 40px;
        @media (max-width: 501px) {
            font-size: 13px;
        }
        div:nth-of-type(1) {
            font-weight: 700;
            width: max-content;
        }

        div:nth-of-type(4) {
            span {
                display: block;
            }
        }
        div:nth-of-type(5) {
            width: max-content;
        }
    }
    .CartPopupWindow__Content {
        overflow-y: scroll;
        max-height: 320px;
        padding-right: 10px;
    }
    .CartPopupWindow__PriceSummary {
        width: 100%;
         text-align: right;
         margin-top: 20px;
         span {
             color: grey;
             margin-right: 13px;
             span {
                 color: black;
             }
         }
        }
    }
`;

const ChartItemContainer = styled.div `
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    align-items: center;
    height: 100px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    .cart__item_image {
        img {
        width: 40%;
        height: 50px;
        object-fit: contain;
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
        display: flex;
        justify-content: flex-end;
        width: 100%;
        span {
            text-align: right;
            width: 100%;
            display: block;
        }
    }
    .cart__item_remove {
        width: 100%;
        button {
            background: none;
            border: none;
            display: block;
            margin: 0 auto;
            cursor: pointer;
            &:focus {
                outline: none;
            }
        }
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
                return Math.round(price * times * 100)/100;
            } else {
                return "9999+"
            }
        }

        const amountRound = (itemtimes) => {
            if (itemtimes < 999) {
                return itemtimes;
            } else {
                return "999+";
            }
        }

          const removeItem = (itemtitle) => {
            var idx = ShoppingCartContent.findIndex(
              (item) => item.title === itemtitle
            );
            const arr = ShoppingCartContent.filter((item, index, arr) => {
              return index !== idx;
            });
            setShoppingCartContent(arr);
        };

        let CartContentMap = arr2.map((item, id) => (
            <ChartItemContainer key={id}>
                    <div className="cart__item_image"><img src={item.image} alt="Product"/></div>
                    <div className="cart__item_title">
                        <LinesEllipsis
                            text={item.title}
                            maxLine="3"
                            ellipsis="..."
                            trimRight
                            basedOn="letters"
                        />
                    </div>
                    <div className="cart__item_amount">{amountRound(item.times)}</div>
                    <div className="cart__item_remove" onClick={() => removeItem(item.title)}><button><FontAwesomeIcon icon={faTrashAlt} size="lg"/></button></div>
                    <div className="cart__item_price"><span>{priceRound(item.price, item.times)} zł</span></div>
            </ChartItemContainer>
        ));

        return (
            <div>{CartContentMap}</div>
        );
        } else {
            return (
                <div>Cart is empty.</div>
            );
        }
    }

    const TotalPrice = ShoppingCartContent?.reduce((sum, item) => {
        return Math.round((sum + item.price) * 100)/100;
    }, 0);

    return (
        <CartPopupWindow onMouseEnter={() => setCartPopupWindowHover(true)} onTouchStart={() => setCartPopupWindowHover(true)} onTouchEnd={() => setCartPopupWindowHover(false)} onMouseLeave={() => setCartPopupWindowHover(false)}>
                <div className="CartPopupWindow__Header">
                    <div>
                        Your cart
                    </div>
                    <div></div>
                    <div className="CartPopupWindow__Header_Amount">Amount:</div>
                    <div>Remove:</div>
                    <div>
                        Cart <span>value:</span> 
                    </div>
                </div>
                <div className="CartPopupWindow__Content">
                    {CartContentCheck()}
                </div>
                <div className="CartPopupWindow__PriceSummary">
                    <span>Total cost: <span> {TotalPrice} zł</span></span>
                </div>
            </CartPopupWindow>
    );
}