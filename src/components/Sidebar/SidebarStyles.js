import styled, { css } from "styled-components";

export const StyledSidebar = styled.div`
  width: 25%;
  background: white;
  z-index: 9;
  @media (max-width: 810px) {
    position: absolute;
    height: 100%;
    width: 30%;
    left: -30%;
    border-right: 1px solid #e0e0e0;
    top: 50px;
  }

  ${({ hamburgerClicked }) =>
    hamburgerClicked &&
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
    font-family: "Lato", sans-serif;
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
        font-family: "Lato", sans-serif;
        text-decoration: none;
        color: #8f8f8f;
        display: block;
        font-weight: 400;
        text-align: left;
        transition: 0.3s;
      }
    }
  }
  .test {
    color: red !important;
  }
`;
