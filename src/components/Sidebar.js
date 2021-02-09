import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.div`
    background: coral;
    width: 25%;
    ul {
        list-style-type: none;
    }
`;




export default function Sidebar(props) {
    
    const categoriesList = props.categories.map((category) => {
        return (
            <li>{ category }</li>
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
