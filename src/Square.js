
const Square = ({id, onClick, boardState, isSquareClicked}) => {

  return(
    <div className="square" id={id} onClick={onClick} isClicked={boardState}>
      {isSquareClicked[id - 1] && boardState[id - 1]}
    </div>
  )
}

export default Square