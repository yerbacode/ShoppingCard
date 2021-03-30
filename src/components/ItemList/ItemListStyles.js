import styled from "styled-components";

export const ItemContainer = styled.div`
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

export const StyledItemList = styled.div`
width: 75%;
@media (max-width: 810px) {
  width: 100%;
}
padding-top: 40px;
position: relative;
ul {
  list-style-type: none;
  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
`;
export const SingleItemContainer = styled.div`
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

export const FlexContainer = styled.div `
display: flex;
justify-content: space-between;
`