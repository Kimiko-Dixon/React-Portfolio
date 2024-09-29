import './project.css'
import PropTypes from 'prop-types'

Project.propTypes = {
    project:PropTypes.object,
    onHover:PropTypes.func,
    target:PropTypes.string
}

    export default function Project({project,onHover,target}) {
        return (
            <div onMouseEnter={() => onHover(project.name)} onMouseLeave={() => onHover('')} className={target ===  project.name ? ('hover') : ('')}>
                <img src={project.img} alt={project.name}/>
                {target === project.name ? (<div className='project-links'><a href={project.deployed} className={target ===  project.name ? ('') : ('noHover')}>{project.name}</a><a href={project.repo} target='_blank'><ion-icon name="logo-github"></ion-icon></a></div>) : null}
            </div>
        )
    } 