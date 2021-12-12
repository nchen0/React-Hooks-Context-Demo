import PropTypes from 'prop-types'
import AddTodo from './AddTodo'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <AddTodo />
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
