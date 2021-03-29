import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
position: relative;
margin-right: 7px;
cursor: pointer;
height: 22px;
`;

export const CartQuantity = styled.div`
background: #d1d1d1;
border-radius: 50px;
height: 17px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
right: -9px;
bottom: -4px;
padding-left: 5px;
padding-right: 5px;
span {
    font-size: 13px;
    margin-bottom: 2px;
}    
`;