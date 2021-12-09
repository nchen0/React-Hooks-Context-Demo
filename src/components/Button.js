const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} >{text}</button>
    )
}

Button.defaultProps = {
    text: 'Add'
}

export default Button
