import React, { useState, useEffect } from "react";
import "./test.css";

const Test = () => {
  const [targetPosition, setTargetPosition] = useState({ top: 0, left: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [responseTime, setResponseTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [score, setScore] = useState(0);

  const generateRandomPosition = () => {
    const top = Math.random() * 80 + 10; // 10% to 90% vertically
    const left = Math.random() * 80 + 10; // 10% to 90% horizontally
    return { top, left };
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    spawnTarget();
  };

  const spawnTarget = () => {
    const position = generateRandomPosition();
    setTargetPosition(position);
    setStartTime(Date.now());
  };

  const handleTargetClick = () => {
    const reactionTime = Date.now() - startTime;
    setResponseTime(reactionTime);
    setScore((prevScore) => prevScore + Math.max(1000 - reactionTime, 0)); // Higher score for faster clicks
    spawnTarget();
  };

  return (
    <div className="game-container">
      <h1>Mouse Click Tracker Game</h1>
      <button onClick={startGame} className="start-button">
        Start Game
      </button>
      {gameStarted && (
        <>
          <div
            className="target"
            style={{
              top: `${targetPosition.top}%`,
              left: `${targetPosition.left}%`,
            }}
            onClick={handleTargetClick}
          ></div>
          <p>Response Time: {responseTime ? `${responseTime}ms` : "-"}</p>
          <p>Score: {score}</p>
        </>
      )}
    </div>
  );
};

export default Test;
