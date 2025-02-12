import React, {useEffect} from 'react'
import Aos from "aos"
import FrontEndLogo from '../../shared/images/fendlogo.svg'
import ToolsLogo from '../../shared/images/toolslogo.svg'
import BackEndLogo from '../../shared/images/backendlogo.svg'
import './skills.scss'

const Skills = () => {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])
  
  const skillsObject = {
    frontEnd: {
      title: 'Front End',
      logo: FrontEndLogo,
      skills:
      [
        {name: 'React/Redux', icon:''},
        {name: 'Next', icon:''},
        {name: 'Backbone', icon: ''},
        {name: 'HTML', icon: ''},
        {name: 'CSS3', icon: ''},
        {name: 'SCSS', icon: ''},
        {name: 'Jquery', icon: ''},
        {name: 'Ajax & Axios', icon: ''},
        {name: 'Bootstrap', icon: ''},
        {name: 'Responsive Design', icon: ''}
      ]
    },
    backEnd: {
      title: 'Back End',
      logo: BackEndLogo,
      skills:
      [
        {name: 'Node JS', icon: ''},
        {name: 'JavaScript (ES6+)', icon: ''},
        {name: 'TypeScript', icon: ''},
        {name: 'Express JS', icon: ''},
        {name: 'PostgreSQL', icon: ''},
        {name: 'MongoDB', icon: ''},
        {name: 'MySQL', icon: ''},
        {name: 'Microservices Architecture'},
        {name: 'RESTful APIs'},
        {name: 'Postman', icon: ''}
      ],
    },
    tools: {
      title: 'Dev Tools',
      logo: ToolsLogo,
      skills:
      [
        {name: 'Docker', icon: ''},
        {name: 'Redis', icon: ''},
        {name: 'ElasticSearch', icon: ''},
        {name: 'RabbitMQ', icon: ''},
        {name: 'AWS', icon: ''},
        {name: 'Azure Insights', icon: ''},
        {name: 'Mocha', icon: ''},
        {name: 'Github', icon: ''},
        {name: 'Git', icon: ''},
        {name: 'Jira', icon: ''},
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
      <div className='grid-column' data-aos="fade-up">
        <div className='grid-column-header-container'>
          <img src={ columnObj.logo} alt='Logo' />
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
        <h1 className='section-header'> Skills</h1>
        <div className='divider-line'/>
        {renderGrid(skillsObject)}
      </div>
    </section>
  )
}

export default Skills