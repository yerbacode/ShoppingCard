import React, { useContext, useEffect } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { ProductDataContext } from "../../context/ProductsContext";
import { ChartDataContext } from "../../context/ChartContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import Loader from "../Loader/Loader";
import { FlexContainer, ItemContainer, SingleItemContainer, StyledItemList } from "./ItemListStyles";


const ItemList = () => {
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
        <img src={item.image} alt={item.title} />
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

export default ItemList;