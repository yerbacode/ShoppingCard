import React, { useContext } from 'react'
import { ChartDataContext } from '../../context/ChartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import LinesEllipsis from "react-lines-ellipsis";
import { CartPopupWindow, ChartItemContainer } from './CartPopupStyles';

const CartPopup = () => {

    const { shoppingCartContent, setShoppingCartContent, setCartPopupWindowHover } = useContext(ChartDataContext);


    const CartContentCheck = () => {

        if(Array.isArray(shoppingCartContent) && shoppingCartContent.length){

        let arr2 = shoppingCartContent.reduce( (a,b) => {
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
            var idx = shoppingCartContent.findIndex(
              (item) => item.title === itemtitle
            );
            const arr = shoppingCartContent.filter((item, index, arr) => {
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

    const TotalPrice = shoppingCartContent?.reduce((sum, item) => {
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

export default CartPopup;