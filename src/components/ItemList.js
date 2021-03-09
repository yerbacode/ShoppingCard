import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import { ProductDataContext } from "../context/ProductsContext";
import { ChartDataContext } from "../context/ChartContext";
import { useParams } from "react-router-dom";

const StyledItemList = styled.div`
  width: 75%;
  padding-top: 40px;
  ul {
    list-style-type: none;
    li {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
const SingleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  margin-bottom: 40px;
  img {
    width: 200px;
    height: 150px;
    display: block;
    margin: 0 auto;
    object-fit: contain;
    margin-bottom: 10px;
  }
  div {
    width: 200px;
    display: block;
    margin: 0 auto;
    div {
      min-height: 80px;
    }
  }
  button {
    width: 100px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
`;

export default function ItemList() {
  const { items, setSelectedCategory, setPathObjFromComp, ProductLoading } = useContext(
    ProductDataContext
  );
  const { ShoppingCartQuantity, setShoppingCartQuantity, ShoppingCartContent, setShoppingCartContent } = useContext(
    ChartDataContext
  );
  const params = useParams();

  useEffect(() => {
    setSelectedCategory(params.category);
    setPathObjFromComp(params.category);
  }, [params.category]);


  const AddToCart = (item) => {
    setShoppingCartContent([ item, ...ShoppingCartContent ])
  }

  let itemMap = items.map((item) => (
    <SingleItemContainer key={item.id}>
      <img src={item.image} alt={item.title} />
      <div>
        <LinesEllipsis
          text={item.title}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <div>{item.price} zł</div>
      <button onClick={() => AddToCart(item)}>
        Add to cart
      </button>
    </SingleItemContainer>
  ));

  const ProductsAreLoaded = () => {
    if (ProductLoading === true ) {
      return (
        <StyledItemList>Loading items</StyledItemList>
      ) 
    } else {
      return (
      <StyledItemList>
        <ItemContainer>{itemMap}</ItemContainer>
      </StyledItemList>
      )
    }
  }

  return (
    ProductsAreLoaded()
  );
}
