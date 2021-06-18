
const Button = ({name, onClick}) => {
  return(
    <div>
      <button className={name} onClick={onClick}>
        {name}
      </button>
    </div>
  )
}

export default Button