import React, { SFC } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  onClick: () => void;
}

export const Square: SFC<Props> = props => (
  <Button onClick={props.onClick}>{props.value}</Button>
);

const Button = styled.button`
  background: #fff;
  border: 1px solid #999;
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
  height: 50px;
  width: 50px;
  text-align: center;
  float: left;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
