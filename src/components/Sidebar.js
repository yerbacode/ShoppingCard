import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.div`
    background: coral;
    width: 25%;
    ul {
        list-style-type: none;
        li {
            margin-top: 10px;
            margin-bottom: 10px;
            cursor: pointer;
        }
    }
`;




export default function Sidebar( {setSelectedCategory, categories} ) {

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
