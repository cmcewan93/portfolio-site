import React from 'react'
import FrontEndLogo from '../../shared/images/fEndlogo.svg'
import ToolsLogo from '../../shared/images/toolsLogo.svg'
import BackEndLogo from '../../shared/images/backEndLogo.svg'
import './skills.scss'

const Skills = () => {
  
  const skillsObject = {
    frontEnd: {
      title: 'Front End',
      logo: FrontEndLogo,
      id: 'front-end',
      skills:
      [
        {name: 'React/Redux', icon:''},
        {name: 'JavaScript (ES6+)', icon: ''},
        {name: 'Jquery', icon: ''},
        {name: 'Ajax', icon: ''},
        {name: 'HTML', icon: ''},
        {name: 'CSS3', icon: ''},
        {name: 'SCSS', icon: ''},
        {name: 'Bootstrap', icon: ''},
        {name: 'Responsive Design', icon: ''}
      ]
    },
    backEnd: {
      title: 'Back End & Databases',
      logo: BackEndLogo,
      id: 'back-end',
      skills:
      [
        {name: 'Node/Express JS', icon: ''},
        {name: 'PostgreSQL', icon: ''},
        {name: 'MongoDB', icon: ''},
        {name: 'Microservices'},
        {name: 'REST APIs'},
      ],
    },
    tools: {
      title: 'Dev Tools',
      logo: ToolsLogo,
      id: 'd-tools',
      skills:
      [
        {name: 'Git', icon: ''},
        {name: 'Unix/Linux Systems'},
        {name: 'Invision', icon: ''},
        {name: 'AWS', icon: ''},
        {name: 'Jira', icon: ''},
        {name: 'Adobe Illustrator', icon: ''}
      ]
    }
  }
  
  const renderGrid = (skillsObject) => {
    let keys = Object.keys(skillsObject)
    return (
      <div className='skills-grid-container'>
        {
          keys.map(key => {
           return renderGridColumn(skillsObject[key])
          })
        }
      </div>
    )
  }
  const renderGridColumn = (columnObj) => {
    return (
      <div className='grid-column'>
        <div className='grid-column-header-container'>
          <img src={columnObj.logo} id={`${columnObj.id}`}></img>
          <div className='grid-column-header'>
            {columnObj.title}
          </div>
        </div>
        <div className='grid-row-container'>
        {
          columnObj.skills.map(skillObj => {
            return renderGridRow(skillObj)
          })
        }
        </div>
      </div>
    )
  }
  const renderGridRow = (rowObj) => {
    return (
      <div className='grid-row'>
        {rowObj.name}
      </div>
    )
  }
  return (
    <section className='section-container bg-white'>
      <div className='content-container' id='skills-section'>
        <h1 className='section-header'>Skills</h1>
        {renderGrid(skillsObject)}
      </div>
    </section>
  )
}

export default Skills