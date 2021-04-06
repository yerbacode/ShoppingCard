import React, { useContext } from "react";
import { CartDataContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import LinesEllipsis from "react-lines-ellipsis";
import {
  CartPopupWindow,
  CartItemContainer,
  CartPopupWindowHeader,
  CartPopupWindowPriceSummary,
  CartPopupWindowContent,
  CartItemImage,
  CartItemTitle,
  CartItemAmount,
  CartItemRemove,
  CartItemPrice,
} from "./CartPopupStyles";

const CartPopup = () => {
  const {
    shoppingCartContent,
    setShoppingCartContent,
  } = useContext(CartDataContext);

  const cartContentCheck = () => {
    if (shoppingCartContent.length) {
      const cartContentReducer = shoppingCartContent.reduce((a, b) => {
        const i = a.findIndex((x) => x.title === b.title);
        return (
          i === -1
            ? a.push({
                title: b.title,
                price: b.price,
                image: b.image,
                times: 1,
              })
            : a[i].times++,
          a
        );
      }, []);

      const priceRound = (price, times) => {
        if (price * times < 9999) {
          return Math.round(price * times * 100) / 100;
        } else {
          return "9999+";
        }
      };

      const amountRound = (itemtimes) => {
        if (itemtimes < 999) {
          return itemtimes;
        } else {
          return "999+";
        }
      };

      const removeItem = (itemtitle) => {
        var idx = shoppingCartContent.findIndex(
          (item) => item.title === itemtitle
        );
        const arr = shoppingCartContent.filter((item, index, arr) => {
          return index !== idx;
        });
        setShoppingCartContent(arr);
      };

      let CartContentMap = cartContentReducer.map((item, id) => (
        <CartItemContainer key={id}>
          <CartItemImage>
            <img src={item.image} alt="Product" />
          </CartItemImage>
          <CartItemTitle>
            <LinesEllipsis
              text={item.title}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </CartItemTitle>
          <CartItemAmount>{amountRound(item.times)}</CartItemAmount>
          <CartItemRemove onClick={() => removeItem(item.title)}>
            <button>
              <FontAwesomeIcon icon={faTrashAlt} size="lg" />
            </button>
          </CartItemRemove>
          <CartItemPrice>
            <span>{priceRound(item.price, item.times)} zł</span>
          </CartItemPrice>
        </CartItemContainer>
      ));

      return <div>{CartContentMap}</div>;
    } else {
      return <div>Cart is empty.</div>;
    }
  };

  const TotalPrice = shoppingCartContent?.reduce((sum, item) => {
    return Math.round((sum + item.price) * 100) / 100;
  }, 0);

  return (
    <CartPopupWindow>
      <CartPopupWindowHeader>
        <div>Your cart</div>
        <div></div>
        <div>Amount:</div>
        <div>Remove:</div>
        <div>
          Cart <span>value:</span>
        </div>
      </CartPopupWindowHeader>
      <CartPopupWindowContent>{cartContentCheck()}</CartPopupWindowContent>
      <CartPopupWindowPriceSummary>
        <span>
          Total cost: <span> {TotalPrice} zł</span>
        </span>
      </CartPopupWindowPriceSummary>
    </CartPopupWindow>
  );
};

export default CartPopup;
