import Square from './Square.js'

const Board = ({squares, onClick, boardState, markSpace, isSquareClicked}) => {
  return(
    <div className="board">
    {squares.map(square => 
      <Square 
        id={square} 
        onClick={onClick} 
        key={square} 
        boardState={boardState}
        isSquareClicked={isSquareClicked}
        markSpace={markSpace}
      />)
    }
    </div>
  )
}

export default Board