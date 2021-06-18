import React, { useState, useEffect, useRef } from 'react'
import Winner from './Winner.js'
import Board from './Board.js'
import Button from './Button.js'

const App = () => {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const winningSquares = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const [ isX, setIsX ] = useState(true);
  const [ markSpace, setMarkSpace ] = useState('X');
  const [ boardState, setBoardState ] = useState(new Array(9).fill(null));
  const [ isSquareClicked, setIsSquareClicked ] = useState(new Array(9).fill(false));
  const [ winner, setWinner ] = useState(null);

  // Resets states
  const handleResetClick = () => {
    setIsX(true);
    setMarkSpace('X');
    setBoardState(new Array(9).fill(null));
    setIsSquareClicked(new Array(9).fill(false));
    setWinner(null);
  }

  // While there is no winner, mark a square if it's clicked
  const handleOnClick = (event) => {    
    if (winner === null && isSquareClicked[event.target.id - 1] !== true){
      // Update how the board currently looks
      let boardStateCopy = [...boardState];
      boardStateCopy[event.target.id - 1] = markSpace;
      setBoardState(boardStateCopy);

      // Update which squares are currently clicked
      let isSquareClickedCopy = [...isSquareClicked];
      isSquareClickedCopy[event.target.id - 1] = true;
      setIsSquareClicked(isSquareClickedCopy);

      // Toggles if the next mark should be an X
      setIsX(!isX);
    }
  }

  // Toggles the next mark
  useEffect(() => {
    if (isX){
      setMarkSpace('X');
    }
    else{
      setMarkSpace('O');
    }  
  }, [isX])

  // Check for a winner
  useEffect(() => {
    // Check if the squares on the board match the winning combinations
    winningSquares.map(combination => {
      if (boardState[combination[0]] !== null && boardState[combination[0]] === boardState[combination[1]] && boardState[combination[0]] === boardState[combination[2]]){
        setWinner(boardState[combination[0]]);
      }
    })

    // If every squares are filled and there is no winner, declare no winner
    if (isSquareClicked.every(square => square === true) === true && winner === null){
      setWinner('No winner');
    }
  }, [boardState])

  return(
  <div className="container">
    <Winner winner={winner} />
    <Board 
      squares={squares} 
      onClick={handleOnClick}
      markSpace={markSpace}
      boardState={boardState}
      isSquareClicked={isSquareClicked}
    />
    <Button 
      name="Reset"
      onClick={handleResetClick}
    />
  </div>        
  )
}

export default App