import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ProductDataContext } from '../context/ProductsContext';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import useWindowSize from './WindowSize';
import { ChartDataContext } from '../context/ChartContext';


const StyledSidebar = styled.div`
    width: 25%;
    @media (max-width: 810px) {
        position: absolute;
        background: white;
        height: 100%;
        width: 30%;
        left: -30%;
        border-right: 1px solid #e0e0e0;
    }

    ${ ({HamburgerClicked}) =>
    HamburgerClicked &&
    css`
        width: 30%;
        left: 0% !important;
        padding-left: 5%;
        padding-right: 15px;
    `}

    padding-top: 40px;
    transition: 0.5s;
    .sidebar__header {
        font-size: 20px;
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        text-align: left;
        display: block;
        color: #1f1f1f;
        margin-bottom: 20px;
    }
    ul {
        list-style-type: none;
        padding-top: 0px;
        margin-top: 0px;
        li {
            margin-top: 25px;
            margin-bottom: 10px;
            cursor: pointer;
            width: 100%;
            a {
                font-family: 'Lato', sans-serif;
                text-decoration: none;
                color: #8f8f8f;
                display: block;
                font-weight: 400;
                text-align: left;
                transition: 0.3s;
            }
        }
    }
`;

export default function Sidebar() {
    const { HamburgerClicked } = useContext(ChartDataContext);
    const { categories } = useContext(ProductDataContext);

    const windowWidth = useWindowSize();

    const categoriesList = categories.map((category, index) => {
        return (
            <li>
                <Link to={`/${category}`} key={index}>
                    {category}
                </Link>
           </li>
        )
    })

    return (
        <StyledSidebar HamburgerClicked={HamburgerClicked}>
            <div className="sidebar__header">Categories</div>
            <ul>
            { categoriesList }
            </ul>
        </StyledSidebar>
    )
}
