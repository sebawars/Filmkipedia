import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-bottom: 1px solid #e0e0e0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0 2em;
  background-color: #1c3643;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: left;
  text-decoration: none;
  width: fit-content;
  &[aria-current] {
    color: #000;
  }
`;

export const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: #90a4ae;
`;
