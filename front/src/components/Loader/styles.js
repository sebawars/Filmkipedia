import styled, { keyframes } from 'styled-components';

export const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const scale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3);
  }
`;

export const PopCornIcon = styled.img`
  animation: ${scale} 0.7s linear infinite;
  animation-direction: alternate;
  max-height: 5em;
`;
