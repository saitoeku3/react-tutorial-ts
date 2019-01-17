import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { SquareContent } from '../types';

export const Game: FC = () => {
  const [squares, setSquares] = useState(Array<SquareContent>(9).fill(''));
  const [xIsNext, setXIxNext] = useState(true);
  const [log, setLog] = useState('');

  const handleClick = (i: number): void => {
    const _squares = squares.slice();
    _squares[i] = xIsNext ? 'X' : 'O';

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    setSquares(_squares);
    setXIxNext(!xIsNext);
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    const _log = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? 'X' : 'O'}`;
    setLog(_log);
  });

  return (
    <Wrapper>
      <Board squares={squares} onClick={(i: number) => handleClick(i)} />
      <Log>{log}</Log>
    </Wrapper>
  );
};

const calculateWinner = (squares: SquareContent[]): SquareContent | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px auto;
  width: 80%;
  max-width: 500px;
  padding-left: 15%;
`;

const Log = styled.div`
  margin-left: 30px;
`;
