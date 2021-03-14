import React from 'react';
import styled from 'styled-components';


const LoaderComponent = styled.div `
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
  .line {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #c6c6c6;
  }
  .line:nth-last-child(1) {
    animation: loadingC 0.6s 0.1s linear infinite;
  }
  .line:nth-last-child(2) {
    animation: loadingC 0.6s 0.2s linear infinite;
  }
  .line:nth-last-child(3) {
    animation: loadingC 0.6s 0.3s linear infinite;
  }
  @keyframes loadingC {
    0 {
     transform: translate(0, 0);
   }
   50% {
     transform: translate(0, 15px);
   }
   100% {
     transform: translate(0, 0);
   }
}
`

const Loader = () => {
    return (
          <LoaderComponent>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </LoaderComponent>
    )
}

export default Loader;