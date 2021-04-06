import styled from "styled-components";

export const CartPopupWindow = styled.div`
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
  z-index: 10;
  @media (max-width: 501px) {
    width: 84vw;
  }
`;
export const CartPopupWindowPriceSummary = styled.div`
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
`;
export const CartPopupWindowContent = styled.div`
  overflow-y: scroll;
  max-height: 320px;
  padding-right: 10px;
`;
export const CartPopupWindowHeader = styled.div`
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
`;

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  align-items: center;
  height: 100px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`;

export const CartItemImage = styled.div`
  img {
    width: 40%;
    height: 50px;
    object-fit: contain;
  }
`;

export const CartItemTitle = styled.div`
  font-size: 13px;
  text-align: left;
`;

export const CartItemAmount = styled.div`
  text-align: center;
`;

export const CartItemPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  span {
    text-align: right;
    width: 100%;
    display: block;
  }
`;

export const CartItemRemove = styled.div`
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
`;
