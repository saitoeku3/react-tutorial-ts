import React, { SFC } from 'react';
import styled from 'styled-components';
import { Square } from './Square';
import { SquareContent } from '../types';

interface Props {
  squares: SquareContent[];
  onClick: (i: number) => void;
}

export const Board: SFC<Props> = props => {
  const renderSquare = (i: number) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <div>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </div>
  );
};

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`;
