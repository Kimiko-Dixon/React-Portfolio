import Project from '../../components/Project/project'
import { useState } from 'react'
import accessibility from '../../img/accessibility-project.jpg'
import './portfolio.css'

    export default function Portfolio() {
        const projects = [
            {
                name:'Example 1',
                img: accessibility,
                deployed:'https://kimiko-dixon.github.io/Modual_1_challenge/',
                repo:'https://github.com/Kimiko-Dixon/Modual_1_challenge'
            },
            {
                name:'Example 2',
                img:accessibility,
                deployed:'https://kimiko-dixon.github.io/Modual_1_challenge/',
                repo:'https://github.com/Kimiko-Dixon/Modual_1_challenge'
            },
            {
                name:'Example 3',
                img:accessibility,
                deployed:'https://kimiko-dixon.github.io/Modual_1_challenge/',
                repo:'https://github.com/Kimiko-Dixon/Modual_1_challenge'
            },
            {
                name:'Example 4',
                img: accessibility,
                deployed:'https://kimiko-dixon.github.io/Modual_1_challenge/',
                repo:'https://github.com/Kimiko-Dixon/Modual_1_challenge'
            },
            {
                name:'Example 5',
                img:accessibility,
                deployed:'https://kimiko-dixon.github.io/Modual_1_challenge/',
                repo:'https://github.com/Kimiko-Dixon/Modual_1_challenge'
            },
            {
                name:'Example 6',
                img:accessibility,
                deployed:'https://kimiko-dixon.github.io/Modual_1_challenge/',
                repo:'https://github.com/Kimiko-Dixon/Modual_1_challenge'
            }
        ]
        const [target,setTarget] = useState('')
        const [targetLink,setTargetLink] = useState('')
        const onHover = (key) => {
            console.log(key)
            setTarget(key)
        }

        const onHoverLink = (key) => {
            console.log(key)
            setTargetLink(key)
        }
        return (
            <div className='row row-cols-2 g-3' id='projects'>
                {projects.map((project) => (
                    <div key={project.name} >
                        <Project project={project} onHover={onHover} target={target} onHoverLink={onHoverLink} targetLink={targetLink}/>
                    </div>
                
                ))}
            </div>
        )
    } 