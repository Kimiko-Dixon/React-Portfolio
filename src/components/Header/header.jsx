import './header.css'
import PropTypes from 'prop-types'

Header.propTypes = {
    children:PropTypes.element
}

export default function Header({children}) {
    return (
        <header /* className='sticky' */>
            <div id='name'>
                <h1>Kimiko Dixon</h1>
            </div>
            {children}
        </header>
    )
} 