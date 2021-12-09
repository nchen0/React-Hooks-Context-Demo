import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title }) => {
    const onClick = () => {
    }

    return (
        <header>
            <h1>{title}</h1>
            <Button text="Add" color="green" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Todos'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
