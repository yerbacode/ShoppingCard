import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductDataContext } from '../context/ProductsContext';

const StyledSidebar = styled.div`
    background: coral;
    width: 25%;
    padding-top: 40px;
    ul {
        list-style-type: none;
        padding-top: 0px;
        margin-top: 0px;
        li {
            margin-top: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            &:nth-of-type(1) {
                margin-top: 0px;
            }
        }
    }
`;




export default function Sidebar() {

    const { setSelectedCategory, categories } = useContext(ProductDataContext);

    const categoriesList = categories.map((category) => {
        return (
            <li onClick={() => setSelectedCategory(category) }>{category}</li>
        )
    })

    return (
        <StyledSidebar>
            <ul>
            { categoriesList }
            </ul>
        </StyledSidebar>
    )
}
