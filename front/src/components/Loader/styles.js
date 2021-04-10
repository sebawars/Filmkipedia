import styled from 'styled-components';

export const LoaderCont = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  margin: auto;

  div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #000;
    animation: lds-grid 1.2s linear infinite;
  }

  @keyframes lds-grid {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }
  }

  div:nth-child(1) {
    top: 6px;
    left: 6px;
    animation-delay: 0s;
  }

  div:nth-child(2) {
    top: 6px;
    left: 26px;
    animation-delay: -0.4s;
  }

  div:nth-child(3) {
    top: 6px;
    left: 45px;
    animation-delay: -0.8s;
  }

  div:nth-child(4) {
    top: 26px;
    left: 6px;
    animation-delay: -0.4s;
  }

  div:nth-child(5) {
    top: 26px;
    left: 26px;
    animation-delay: -0.8s;
  }

  div:nth-child(6) {
    top: 26px;
    left: 45px;
    animation-delay: -1.2s;
  }

  div:nth-child(7) {
    top: 45px;
    left: 6px;
    animation-delay: -0.8s;
  }

  div:nth-child(8) {
    top: 45px;
    left: 26px;
    animation-delay: -1.2s;
  }

  div:nth-child(9) {
    top: 45px;
    left: 45px;
    animation-delay: -1.6s;
  }
`;
