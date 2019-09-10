import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingCat = styled.img`
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  top: 10px;
  right: 30px;
`;

export default () => (
  <RotatingCat 
    src="/rotatingCat.png"
    height="150"
    width="150"
  />
);