import Square from './Square.js'

const Board = ({squares, onClick, isClicked}) => {
  return(
    <div className="board">
    {squares.map(square => 
      <Square 
        id={square} 
        onClick={onClick} 
        key={square} 
        isClicked={isClicked}
      />)
    }
    </div>
  )
}

export default Board