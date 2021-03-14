import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChartDataContext } from '../context/ChartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import LinesEllipsis from "react-lines-ellipsis";


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
        grid-template-columns: 20% 25% 20% 20% 15%;
        height: 40px;
        div:nth-of-type(1) {
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
    grid-template-columns: 20% 25% 20% 20% 15%;
    align-items: center;
    height: 100px;
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
    .cart__item_price 
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
                return price * times
            } else {
                return "9999+"
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
                    <div className="cart__item_amount">{item.times}</div>
                    <div className="cart__item_remove" onClick={() => removeItem(item.title)}><button><FontAwesomeIcon icon={faTrashAlt} size="lg"/></button></div>
                    <div className="cart__item_price"><span>{priceRound(item.price, item.times)} zł</span></div>
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
    
    useEffect(() => {
        console.log(ShoppingCartContent);
      }, [ShoppingCartContent])


    return (
        <CartPopupWindow onMouseEnter={() => setCartPopupWindowHover(true)}  onMouseLeave={() => setCartPopupWindowHover(false)}>
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
            </CartPopupWindow>
    );
}