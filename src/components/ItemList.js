import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import { ProductDataContext } from "../context/ProductsContext";
import { ChartDataContext } from "../context/ChartContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import Loader from "./Loader";


const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-gap: 10px;
  @media (max-width: 1670px) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

const StyledItemList = styled.div`
  width: 75%;
  @media (max-width: 810px) {
    width: 100%;
  }
  padding-top: 40px;
  positon: relative;
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
  .single__item {
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #e0e0e0;
    padding: 20px 20px 20px 20px;
    img {
    width: 200px;
    height: 150px;
    display: block;
    margin: 0 auto;
    object-fit: contain;
    margin-bottom: 10px;
    }
    .single__item_price {
      font-family: 'Nova Mono', monospace;
      color: #828282;
    }
    .single__item_title {
      display: block;
      margin: 0 auto;
      text-align: justify;
      div {
        min-height: 80px;
      }
    }
    button {
      display: block;
      border: none;
      background: none;
      color: #828282;
      cursor: pointer;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

const FlexContainer = styled.div `
  display: flex;
  justify-content: space-between;
`

export default function ItemList() {
  const { items, setSelectedCategory, setPathObjFromComp, productLoading } = useContext(
    ProductDataContext
  );
  const { shoppingCartContent, setShoppingCartContent } = useContext(
    ChartDataContext
  );
  const params = useParams();

  useEffect(() => {
    setSelectedCategory(params.category);
    setPathObjFromComp(params.category);
  }, [params.category]);


  const AddToCart = (item) => {
    setShoppingCartContent([ item, ...shoppingCartContent ])
  }

  let itemMap = items.map((item) => (
    <SingleItemContainer key={item.id}>
      <div className="single__item">
        {/* Replacing temporaty untill API will be fixed. */}
        <img src={item.image.replace('https://fakestoreapi.com/', 'https://fakestoreapi.herokuapp.com/')} alt={item.title} />
        <div className="single__item_title">
          <LinesEllipsis
            text={item.title}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <FlexContainer>
          <div className="single__item_price">{item.price} zł</div>
          <button onClick={() => AddToCart(item)}>
            <FontAwesomeIcon icon={faShoppingBasket}/>Add to cart
          </button>
        </FlexContainer>
      </div>
    </SingleItemContainer>
  ));

  const ProductsAreLoaded = () => {
    if (productLoading === true ) {
      return (
        <StyledItemList><Loader/></StyledItemList>
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
