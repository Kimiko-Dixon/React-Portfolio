import './project.css'
import PropTypes from 'prop-types'

Project.propTypes = {
    project:PropTypes.object,
    onHover:PropTypes.func,
    target:PropTypes.string,
    onHoverLink:PropTypes.func,
    targetLink:PropTypes.string
}

    export default function Project({project,onHover,target,onHoverLink,targetLink}) {
        return (
            <div onMouseEnter={() => onHover(project.name)} onMouseLeave={() => onHover('')} className={target ===  project.name ? ('imgDiv hover') : ('imgDiv')}>
                <img src={project.img} alt={project.name}/>
                {target === project.name ? 
                (<div className='project-links'>
                    <a 
                        href={project.deployed}
                        target='_blank' 
                        onMouseEnter={() => onHoverLink('deployed')} 
                        onMouseLeave={() => onHoverLink('')} 
                        className={targetLink ===  'deployed' ? ('hoverLink') : ('noHoverLink')}
                    >
                        {project.name}
                    </a>
                    <a 
                        href={project.repo} 
                        target='_blank'
                        onMouseEnter={() => onHoverLink('repo')} 
                        onMouseLeave={() => onHoverLink('')} 
                        className={targetLink ===  'repo' ? ('hoverLink') : ('noHoverLink')}
                    >
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    </div>
                ) : null}
            </div>
        )
    } 