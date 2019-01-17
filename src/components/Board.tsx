import * as React from 'react';
import styled from 'styled-components';
import { Square } from './Square';
import { SquareContent } from '../types';

interface Props {
  squares: SquareContent[];
  onClick: (i: number) => void;
}

export const Board: React.FunctionComponent<Props> = props => {
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
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </BoardRow>
      <BoardRow>
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
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
