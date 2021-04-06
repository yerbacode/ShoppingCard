import React, { useContext, useEffect } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { ProductDataContext } from "../../context/ProductsContext";
import { CartDataContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader/Loader";
import {
  FlexContainer,
  ItemContainer,
  SingleItem,
  SingleItemButton,
  SingleItemContainer,
  SingleItemPrice,
  SingleItemTitle,
  StyledItemList,
} from "./ItemListStyles";

const ItemList = () => {
  const {
    items,
    setSelectedCategory,
    setPathObjFromComp,
    productLoading,
  } = useContext(ProductDataContext);
  const { shoppingCartContent, setShoppingCartContent } = useContext(
    CartDataContext
  );
  const params = useParams();

  useEffect(() => {
    setSelectedCategory(params.category);
    setPathObjFromComp(params.category);
  }, [params.category]);

  const AddToCart = (item) => {
    setShoppingCartContent([item, ...shoppingCartContent]);
  };

  let itemMap = items.map((item) => (
    <SingleItemContainer key={item.id}>
      <SingleItem>
        <img src={item.image} alt={item.title} />
        <SingleItemTitle>
          <LinesEllipsis
            text={item.title}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </SingleItemTitle>
        <FlexContainer>
          <SingleItemPrice>{item.price} zł</SingleItemPrice>
          <SingleItemButton onClick={() => AddToCart(item)}>
            <FontAwesomeIcon icon={faShoppingBasket} />
            Add to cart
          </SingleItemButton>
        </FlexContainer>
      </SingleItem>
    </SingleItemContainer>
  ));

  const ProductsAreLoaded = () => {
    return (
      <StyledItemList>
        {productLoading ? <Loader /> : <ItemContainer>{itemMap}</ItemContainer>}
      </StyledItemList>
    );
  };

  return ProductsAreLoaded();
};

export default ItemList;
