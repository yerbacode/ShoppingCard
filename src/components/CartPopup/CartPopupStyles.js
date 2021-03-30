import styled from "styled-components";

export const CartPopupWindow = styled.div `
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
    @media (max-width: 501px) {
        width: 84vw;
    }
    .CartPopupWindow__Header {
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
    }
    .CartPopupWindow__Content {
        overflow-y: scroll;
        max-height: 320px;
        padding-right: 10px;
    }
    .CartPopupWindow__PriceSummary {
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
        }
    }
`;

export const ChartItemContainer = styled.div `
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    align-items: center;
    height: 100px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
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
    .cart__item_price {
        display: flex;
        justify-content: flex-end;
        width: 100%;
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