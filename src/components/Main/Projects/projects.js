import React, {useState, useEffect} from 'react';
import ProjectModal from '../../shared/Modals/project-modal'

import PlaylinePic from '../../shared/images/Playline/playline-logo1.svg'
import PorfolioPic from '../../shared/images/CM-logo-white.svg'
import NightOwlPic from '../../shared/images/NightOwl/nightowl-logo.svg'
import CodePinPic from '../../shared/images/CodePin/codepin.jpg'
import SchedulerPic from '../../shared/images/Scheduler/scheduler-logo.svg'
import TweeterLogo from '../../shared/images/Tweeter/tweeter-logo.svg'
import './projects.scss'

const Projects = () => {

  const [visible, setVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})
  const [hoverId, setHoverId] = useState(null)

  const showModal = () => {setVisible(true)}
  const hideModal = () => {setVisible(false)}

  const selectProject = (project) => {
    setSelectedProject(project)
    showModal()
  }

  const projects = [
    {
      id: 1,
      name: 'Portfolio Site',
      subtext: 'Colin McEwan\'\s personal portfolio site.',
      description: 
      `A portfolio site showcasing projects that I have created or collborated on and providing insight into who I am. Powered by ReactJS and styled using SCSS, the site was
      designed/developed without any CSS frameworks as a design exercise. It is entirely responsive and Cross-browser compatible to ensure accessibillity to a large variety of users.
      The majority of icons and images were created using Adobe Illustrator and Photoshop`,
      url: 'https://github.com/cmcewan93/portfolio-site',
      stack: 'ReactJS',
      logo: PorfolioPic,
      images: []
    },
    {
      id: 2,
      name: 'CodePin',
      stack: 'ReactJS, ExpressJS & PostgreSQL',
      logo: CodePinPic,
      images: []
    },
    {
      id: 3,
      name: 'PlayLine Features',
      stack: 'ReactJS, PHP/Symfony & PostgreSQL',
      logo: PlaylinePic,
      images: []
    },
    {
      id: 4,
      name: 'Interview Scheduler',
      stack: 'ReactJS, ExpressJS & PostgreSQL',
      logo: SchedulerPic,
      images: []
    },
    {
      id: 5,
      name: 'Night Owl',
      stack: 'ReactJS, ExpressJS & PostgreSQL',
      logo: NightOwlPic,
      images: []
    },
    {
      id: 6,
      name: 'Tweeter',
      stack: 'JQuery & Javascript',
      logo: TweeterLogo,
      images: []
    }
  ]

  const renderGrid = (projects) => {

    // This func splits the array into sub arrays of a specified length, creates the columns for the grid
    function split(array, n) {
      let [...arr]  = array;
      var res = [];
      while (arr.length) {
        res.push(arr.splice(0, n));
      }
      return res;
    }
    let splitArray = split(projects, 2)
   
    return (
      <div className="grid-container">
        {
          splitArray.map((column, index) => {
            return renderColumn(column, index)
          })
        }
      </div>
    )
  }

  const renderColumn = (column, columnNum) => {
    return (
      <div className='grid-column-projects'>
        {
          column.map(row => {
            return renderGridItem(row, columnNum)
          })
        }
      </div>
    )
  }
  
  const renderGridItem = (item, columnNum) => {
    let columnColorClassArray = ['bg-34G', 'bg-39G', 'bg-36G'] // each color represents bg color for grid items in a column
    return (
      <div className={`grid-item ${columnColorClassArray[columnNum]} ${hoverId == item.id ? 'hovered' : ''}`} onMouseEnter={() => setHoverId(item.id)} onMouseLeave={() => setHoverId(null)}>
        {
          hoverId == item.id ?
          <div className='inner-grid-item'>
            <div className='upper-grid-item'>
              <div className='project-title'>{item.name}</div>
              <div className='tech-stack'>{item.stack}</div>
            </div>
            <div className='project-button' onClick={() => selectProject(item)}>LEARN MORE</div>
          </div>
          :
          <img className='grid-image' src={item.logo}/>
        }
      </div>
    )
  }

  return (
    <section className='section-container bg-white'>
      <div className='content-container bg-light-slate-grey' id='projects-section'>
        <h1 className='section-header'>Things I've Worked On</h1>
        {
          renderGrid(projects)
        }
      </div>
      <ProjectModal visible={visible} hideModal={hideModal} project={selectedProject}/>
    </section>
  )
}

export default Projects