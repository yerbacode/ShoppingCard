import React, { useContext, useEffect } from 'react';
import styled, {css} from "styled-components";
import { ChartDataContext } from '../context/ChartContext';



const Burger = styled.div `
cursor: pointer;
transform: scale(0.7);
@media (min-width: 810px) {
  display: none;
}
.line{
    width: 50px;
    height: 5px;
    background-color: #1f1f1f;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.is-active{
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transition-delay: 0.6s;
  -o-transition-delay: 0.6s;
  transition-delay: 0.6s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.is-active .line:nth-child(2){
  width: 0px;
}

.is-active .line:nth-child(1),
.is-active .line:nth-child(3){
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

.is-active .line:nth-child(1){
  -webkit-transform: translateY(13px);
  -ms-transform: translateY(13px);
  -o-transform: translateY(13px);
  transform: translateY(13px);
}

.is-active .line:nth-child(3){
  -webkit-transform: translateY(-13px) rotate(90deg);
  -ms-transform: translateY(-13px) rotate(90deg);
  -o-transform: translateY(-13px) rotate(90deg);
  transform: translateY(-13px) rotate(90deg);
}
${ ({HamburgerClicked}) =>
    HamburgerClicked &&
    css`
    
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transition-delay: 0.6s;
  -o-transition-delay: 0.6s;
  transition-delay: 0.6s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 99;
  transform: scale(0.7) rotate(45deg);  
.line:nth-child(2){
  width: 0px;
}

.line:nth-child(1),
.line:nth-child(3){
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

.line:nth-child(1){
  -webkit-transform: translateY(13px);
  -ms-transform: translateY(13px);
  -o-transform: translateY(13px);
  transform: translateY(13px);
}

.line:nth-child(3){
  -webkit-transform: translateY(-13px) rotate(90deg);
  -ms-transform: translateY(-13px) rotate(90deg);
  -o-transform: translateY(-13px) rotate(90deg);
  transform: translateY(-13px) rotate(90deg);
}
`}
`;

const HamburgerMenu= () => {

    const { HamburgerClicked, setHamburgerClicked } = useContext(ChartDataContext);

    return ( 
        <Burger HamburgerClicked = {HamburgerClicked} onClick={() => {setHamburgerClicked(!HamburgerClicked)}}>
          <span className = "line"></span> 
          <span className = "line"></span> 
          <span className = "line"></span> 
        </Burger>
    )};

export default HamburgerMenu;