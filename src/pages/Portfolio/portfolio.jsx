import Project from '../../components/Project/project'
import { useState } from 'react'
import accessibility from '../../img/accessibility-project.jpg'
import divDest from '../../img/Itinerary.jpg'
import taskBoard from '../../img/Tasks1.jpg'
import weather from '../../img/HistorySearch.jpg'
import noteTaker from '../../img/Notes_Saved.jpg'
import personalBlog from '../../img/BlogPage.jpg' 
import './portfolio.css'

    export default function Portfolio() {
        const projects = [
            {
                name:'Accessibility',
                img: accessibility,
                deployed:'https://kimiko-dixon.github.io/Modual_1_challenge/',
                repo:'https://github.com/Kimiko-Dixon/Modual_1_challenge'
            },
            {
                name:'Devine Destinations',
                img:divDest,
                deployed:'https://joshuamarknanninga.github.io/Divine-Destinations/',
                repo:'https://github.com/joshuamarknanninga/Divine-Destinations'
            },
            {
                name:'Task Board',
                img:taskBoard,
                deployed:'https://kimiko-dixon.github.io/Task_Board/',
                repo:'https://github.com/Kimiko-Dixon/Task_Board'
            },
            {
                name:'Weather Dashboard',
                img: weather,
                deployed:'https://kimiko-dixon.github.io/Weather_Dashboard/',
                repo:'https://github.com/Kimiko-Dixon/Weather_Dashboard'
            },
            {
                name:'Note Taker',
                img:noteTaker,
                deployed:'https://note-taker-xufm.onrender.com/',
                repo:'https://github.com/Kimiko-Dixon/Note_Taker'
            },
            {
                name:'Personal Blog',
                img:personalBlog,
                deployed:'https://kimiko-dixon.github.io/Personal_Blog/',
                repo:'https://github.com/Kimiko-Dixon/Personal_Blog'
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
            <>
                <h2>Portfolio</h2>
                <div className='row row-cols-2 g-3' id='projects'>
                {projects.map((project) => (
                    <div key={project.name} >
                        <Project project={project} onHover={onHover} target={target} onHoverLink={onHoverLink} targetLink={targetLink}/>
                    </div>
                ))}
            </div>
            </>
            
        )
    } 