import './hero.css'
import PropTypes from 'prop-types'
import headShot from "../../img/profile-photo.jpg";

Header.propTypes = {
    children:PropTypes.element
}

export default function Header() {
    return (
        <div id='hero'>
            <div id='name'>
                <h1>Kimiko Dixon</h1>
                <h4>Backend Developer</h4>
            </div>
            <div className='circle'>
            <img src={headShot} alt="Kimiko Dixon" id="head-shot"/>
            </div>
            
        </div>
    )
} 