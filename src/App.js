import React, { useState, useEffect, useRef } from 'react'

import Board from './Board.js'

const App = () => {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [ isX, setIsX ] = useState(true);
  const [ markSpace, setMarkSpace ] = useState('X');
  const [ isClicked, setIsClicked ] = useState(null);

  // If a square is clicked
  const handleOnClick = (event) => {
    console.log(event.target.id)
    setIsClicked(event.target.id)
  }

  return(
  <div>
    <Board 
      squares={squares} 
      onClick={handleOnClick}
      isX={isX}
      markSpace={markSpace}
      isClicked={isClicked}
    />
  </div>        
  )
}

export default App