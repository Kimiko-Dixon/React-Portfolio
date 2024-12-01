import { Link, List, ListItem } from '@chakra-ui/react'
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
            <List.Root id='footer-links'>
                <ListItem p='0'><Link href="https://github.com/Kimiko-Dixon" target='_blank' onMouseEnter={() => onHover('github')} onMouseLeave={() => onHover('')} className={target === 'github' ? (''): 'noHover'}><ion-icon  size="large" name="logo-github"></ion-icon></Link></ListItem>
                <ListItem ><Link href="https://www.linkedin.com/in/kimiko-a-dixon" target='_blank' onMouseEnter={() => onHover('linkedin')} onMouseLeave={() => onHover('')} className={target === 'linkedin' ? (''): 'noHover'}><ion-icon  size="large" name="logo-linkedin"></ion-icon></Link></ListItem>
                <ListItem ><Link href="mailto:dixonkimiko@gmail.com" onMouseEnter={() => onHover('email')} onMouseLeave={() => onHover('')} className={target === 'email' ? (''): 'noHover'}><ion-icon size='large' name="mail-outline"></ion-icon></Link></ListItem>
            </List.Root>
            {/* <div className='background-cred'>
                Background by <a href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Annie Spratt</a> on <a href="https://unsplash.com/photos/black-textile-in-close-up-photography-6a3nqQ1YwBw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div> */}
        </footer>
    )
} 