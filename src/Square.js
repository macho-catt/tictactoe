import React, {useRef } from 'react'

const Square = ({id, onClick, isClicked}) => {

  const markRef = useRef();
  markRef.current = id === isClicked ? 'X' : '';

  return(
    <div className="square" id={id} onClick={onClick} isClicked={isClicked}>
      {/*{markRef}*/}
    </div>
  )
}

export default Square