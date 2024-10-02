import './nav.css'
import { Link,useLocation } from 'react-router-dom'

export default function Nav() {
    const onPage = useLocation().pathname
    return (
        <nav>
            <ul>
                <li><Link to={'/'} className={onPage === '/' ? 'onPage' : null}>About Me</Link></li>
                <li><Link to={'/portfolio'} className={onPage === '/portfolio' ? 'onPage' : null}>Portfolio</Link></li>
                <li><Link to={'/contact'} className={onPage === '/contact' ? 'onPage' : null}>Contact</Link></li>
                <li><Link to={'/resume'} className={onPage === '/resume' ? 'onPage' : null}>Resume</Link></li>
            </ul>
        </nav>
    )
} 