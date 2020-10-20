import React, {useState, useEffect} from 'react';
import ProjectModal from '../../shared/Modals/project-modal'

import PlaylinePic from '../../shared/images/Playline/playline-logo1.svg'
import PorfolioPic from '../../shared/images/CM-logo-white.svg'
import NightOwlPic from '../../shared/images/NightOwl/nightowl-logo.svg'
import CodePinPic from '../../shared/images/CodePin/codepin.jpg'
import SchedulerPic from '../../shared/images/Scheduler/scheduler-logo.svg'
import TweeterLogo from '../../shared/images/Tweeter/tweeter-logo.svg'

import CodePinLogin from '../../shared/images/CodePin/codepin-login-pic.png'
import CodePinWall from '../../shared/images/CodePin/codepin-resource-wall.png'

import PlayLineLanding from '../../shared/images/Playline/playline-landing.png'
import PlayLineCustom from '../../shared/images/Playline/playline-custom.gif'
import PlayLineLobby from '../../shared/images/Playline/playline-pic.png'

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
      The majority of icons and images were created using Adobe Illustrator and Photoshop.`,
      url: 'https://github.com/cmcewan93/portfolio-site',
      stack: 'ReactJS',
      logo: PorfolioPic,
      images: [
        {
          original: PlayLineLanding,
          thumbnail: PlayLineLanding
        },
        {
          original: PlayLineCustom,
          thumbnail: PlayLineCustom
        },
        {
          original: PlayLineLobby,
          thumbnail: PlayLineLobby
        }
      ]
    },
    {
      id: 2,
      name: 'CodePin',
      subtext: 'Educational resource management system',
      stack: 'Jquery, ExpressJS & PostgreSQL',
      description: `Allows students to save learning resources such as tutorials, blogs and videos in a centralized location that is publicly available to any user. Inspired by 
      Pinterest, users take the urls of online educational resources and save them to their wall which is categorized by a variety of tags. All this data is processed and persisted 
      in to a database by the back end Express server.`,
      url: 'https://github.com/cmcewan93/Codepin',
      logo: CodePinPic,
      images: [
        {
          original: CodePinLogin,
          thumbnail: CodePinLogin
        },
        {
          original: CodePinWall,
          thumbnail: CodePinWall
        }
      ]
    },
    {
      id: 3,
      name: 'PlayLine Features',
      subtext: '',
      description: ``,
      stack: 'ReactJS, PHP/Symfony & PostgreSQL',
      url: 'https://playline.com/',
      logo: PlaylinePic,
      images: [
        {
          original: PlayLineLanding,
          thumbnail: PlayLineLanding
        },
        {
          original: PlayLineCustom,
          thumbnail: PlayLineCustom
        },
        {
          original: PlayLineLobby,
          thumbnail: PlayLineLobby
        }
      ]
    },
    {
      id: 4,
      name: 'Interview Scheduler',
      subtext: '',
      description: ``,
      stack: 'ReactJS, ExpressJS & PostgreSQL',
      url: 'https://github.com/cmcewan93/InterviewScheduler',
      logo: SchedulerPic,
      // images: []
    },
    {
      id: 5,
      name: 'Night Owl',
      subtext: 'Nightlife Application',
      description: `Provides real time, live updates on the current status of bars and nightclubs within a user's area. Performs data analytics from a pool of users to provide 
      accurate live descriptions of different venues.`,
      stack: 'ReactJS, ExpressJS & PostgreSQL',
      url: 'https://github.com/cmcewan93/NightOwl-FrontEnd',
      logo: NightOwlPic,
      // images: []
    },
    {
      id: 6,
      name: 'Tweeter',
      subtext: 'Single-page Twitter clone',
      description: '',
      stack: 'JQuery & Javascript',
      url: 'https://github.com/cmcewan93/tweeter',
      logo: TweeterLogo,
      // images: []
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