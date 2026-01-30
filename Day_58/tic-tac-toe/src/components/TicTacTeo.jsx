import React, { useState } from "react";
import "./TicTacTeo.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));

  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [title, setTitle] = useState("Tic-Tac-Toe Game");

  const toggle = (num) => {
    if (lock) return;
    if (board[num] !== "") return;

    const currentPlayer = count % 2 === 0 ? "x" : "o";

    // Update board immutably
    const nextBoard = [...board];
    nextBoard[num] = currentPlayer;
    setBoard(nextBoard);
    setCount((prev) => prev + 1);

    checkWin(nextBoard);
  };

  const checkWin = (b) => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], 
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, c, d] of wins) {
      if (b[a] && b[a] === b[c] && b[c] === b[d]) {
        won(b[a]);
        return;
      }
    }

    // Optional: Draw
    if (!b.includes("") && !lock) {
      setLock(true);
      setTitle("🤝 It's a Draw!");
    }
  };

  const won = (winner) => {
    setLock(true);

    if (winner === "x") {
      setTitle("🎉 Congratulations: X Wins!");
    } else {
      setTitle("🎉 Congratulations: O Wins!");
    }
  };

  const reset = () => {
    setLock(false);
    setCount(0);
    setBoard(Array(9).fill(""));
    setTitle("Tic-Tac-Toe Game");
  };

  const renderIcon = (cell) => {
    if (cell === "x") return <img src={cross_icon} alt="X" />;
    if (cell === "o") return <img src={circle_icon} alt="O" />;
    return null;
  };

  return (
    <div className="container">
      <h1 className="title">{title}</h1>

      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={() => toggle(0)}>
            {renderIcon(board[0])}
          </div>
          <div className="boxes" onClick={() => toggle(1)}>
            {renderIcon(board[1])}
          </div>
          <div className="boxes" onClick={() => toggle(2)}>
            {renderIcon(board[2])}
          </div>
        </div>

        <div className="row2">
          <div className="boxes" onClick={() => toggle(3)}>
            {renderIcon(board[3])}
          </div>
          <div className="boxes" onClick={() => toggle(4)}>
            {renderIcon(board[4])}
          </div>
          <div className="boxes" onClick={() => toggle(5)}>
            {renderIcon(board[5])}
          </div>
        </div>

        <div className="row3">
          <div className="boxes" onClick={() => toggle(6)}>
            {renderIcon(board[6])}
          </div>
          <div className="boxes" onClick={() => toggle(7)}>
            {renderIcon(board[7])}
          </div>
          <div className="boxes" onClick={() => toggle(8)}>
            {renderIcon(board[8])}
          </div>
        </div>
      </div>

      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
