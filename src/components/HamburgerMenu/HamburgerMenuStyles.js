import styled, { css } from "styled-components";

export const Burger = styled.div`
  cursor: pointer;
  transform: scale(0.7);
  @media (min-width: 810px) {
    display: none;
  }
  span {
    width: 50px;
    height: 5px;
    background-color: #1f1f1f;
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
  }
  .is-active {
    transition: all 0.3s ease-in-out;
    transition-delay: 0.6s;
    transform: rotate(45deg);
  }

  .is-active span:nth-child(2) {
    width: 0px;
  }

  .is-active span:nth-child(1),
  .is-active span:nth-child(3) {
    transition-delay: 0.3s;
  }

  .is-active span:nth-child(1) {
    transform: translateY(13px);
  }

  .is-active span:nth-child(3) {
    transform: translateY(-13px) rotate(90deg);
  }
  ${({ hamburgerClicked }) =>
    hamburgerClicked &&
    css`
      transition: all 0.3s ease-in-out;
      transition-delay: 0.6s;
      transform: rotate(45deg);
      z-index: 99;
      transform: scale(0.7) rotate(45deg);
      span:nth-child(2) {
        width: 0px;
      }

      span:nth-child(1),
      span:nth-child(3) {
        transition-delay: 0.3s;
      }

      span:nth-child(1) {
        transform: translateY(13px);
      }

      span:nth-child(3) {
        transform: translateY(-13px) rotate(90deg);
      }
    `}
`;
