import './footer.css'
import { useState } from 'react'

export default function Footer() {
    const [target,setTarget] = useState('')
    const onHover = (name) => {
        console.log(name)
        setTarget(name)
    }
    return (
        <footer>
            <ul>
                <li><a href="https://github.com/Kimiko-Dixon" target='_blank' onMouseEnter={() => onHover('github')} onMouseLeave={() => onHover('')} className={target === 'github' ? (''): 'noHover'}><ion-icon  size="large" name="logo-github"></ion-icon></a></li>
                <li><a href="https://www.linkedin.com/in/kimiko-a-dixon" target='_blank' onMouseEnter={() => onHover('linkedin')} onMouseLeave={() => onHover('')} className={target === 'linkedin' ? (''): 'noHover'}><ion-icon  size="large" name="logo-linkedin"></ion-icon></a></li>
            </ul>
        </footer> 
    )
} 