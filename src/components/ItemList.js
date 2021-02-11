import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledItemList = styled.div`
    background: red;
    width: 75%;
    ul {
        list-style-type: none;
        li {
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
`;


export default function ItemList( { items } ) {


        let itemMap = items.map((item) => <li>{item.title}</li>);

        return (
        <StyledItemList>
            <ul>
            {itemMap}
            </ul>
        </StyledItemList>
    )
}
