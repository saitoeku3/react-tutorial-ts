import React, { SFC } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';
import { Game } from './Game';

export const App: SFC = () => (
  <Wrapper>
    <Header>
      <Logo src={logo} alt="logo" />
      <h1 style={{ fontSize: '1.5em' }}>React Tutorial App</h1>
    </Header>
    <Game />
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
`;

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
