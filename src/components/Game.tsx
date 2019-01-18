import React, { FC, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { SquareContent } from '../types';

export const Game: FC = () => {
  const [xIsNext, setXIxNext] = useState(true);
  const [log, setLog] = useState('');
  const [history, setHistory] = useState([
    { squares: Array<SquareContent>(9).fill('') },
  ]);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i: number): void => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(_history.concat([{ squares }]));
    setXIxNext(!xIsNext);
    setStepNumber(_history.length);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIxNext(step % 2 === 0);
  };

  const moves = useMemo(
    () => {
      return history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      });
    },
    [history],
  );

  useEffect(() => {
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const _log = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? 'X' : 'O'}`;
    setLog(_log);
  });

  return (
    <Wrapper>
      <Board
        squares={history[stepNumber].squares}
        onClick={(i: number) => handleClick(i)}
      />
      <Info>
        {log}
        <History>{moves}</History>
      </Info>
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

const Info = styled.div`
  margin-left: 30px;
`;

const History = styled.ol`
  margin-top: 10px;
`;
