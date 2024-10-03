import './resume.css'

export default function Resume() {
    return (
        <>
        <h2>Resume</h2>
        <div>
            <h5>Download my <a href='https://drive.google.com/uc?export=download&id=1Kzzcnlwv0wcLyEN-k2EptAJUeYcuIYsq' download className='resume-link'>resume</a></h5>
        </div>
        <div id="resume">
        <div className="proficiencies">
            <h3>Proficiencies</h3>
          <ul>
            <li>JavaScript</li>
            <li>Express</li>
            <li>Node</li>
            <li>APIs</li>
            <li>PostSQL/Sequelize</li>
            <li>MongoDB/Mongoose</li>
            <li>REST</li>
          </ul>
        </div>
      </div>
        </>
    )
} 