import React, { useContext } from 'react';
import { ChartDataContext } from '../context/ChartContext';
import { Burger } from './HamburgerMenuStyles';

const HamburgerMenu= () => {

    const { hamburgerClicked, setHamburgerClicked } = useContext(ChartDataContext);

    return ( 
        <Burger hamburgerClicked = {hamburgerClicked} onClick={() => {setHamburgerClicked(!hamburgerClicked)}}>
          <span className = "line"></span> 
          <span className = "line"></span> 
          <span className = "line"></span> 
        </Burger>
    )};

export default HamburgerMenu;