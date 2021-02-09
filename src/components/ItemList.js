import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledItemList = styled.div`
    background: red;
    width: 75%;
`;


export default function ItemList( { items } ) {


        let itemMap = items.map((item) => <li>{item.title}</li>);

        return (
        <StyledItemList>
            {itemMap}
        </StyledItemList>
    )
}
