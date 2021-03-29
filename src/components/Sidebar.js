import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductsContext';
import { Link } from "react-router-dom";
import { ChartDataContext } from '../context/ChartContext';
import { StyledSidebar } from './SidebarStyles';

const Sidebar = () => {
    const { setHamburgerClicked, hamburgerClicked } = useContext(ChartDataContext);
    const { categories } = useContext(ProductDataContext);

    const categoriesList = categories.map((category, index) => {
        return (
            <li>
                <Link to={`/${category}`} key={index} onClick={() => {setHamburgerClicked(false)}}>
                    {category}
                </Link>
           </li>
        )
    })

    return (
        <StyledSidebar hamburgerClicked={hamburgerClicked}>
            <div className="sidebar__header">Categories</div>
            <ul>
            { categoriesList }
            </ul>
        </StyledSidebar>
    )
}

export default Sidebar;