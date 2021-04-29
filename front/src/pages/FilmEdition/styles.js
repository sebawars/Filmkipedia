import styled from 'styled-components';

export const EditionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
export const ButtonsContainer = styled.div`
  margin-top: 2em;
  width: 30em;
  max-width: 60%
  display: flex;
  justify-content: space-between;

  button {
    width: auto;
    min-width: 3em;
  }
`;

export const ButtonText = styled.span`
  @media (max-width: 656px) {
    display: none !important;
  }
`;
