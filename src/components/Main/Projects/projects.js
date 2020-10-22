import React, {useState, useEffect} from 'react';
import ProjectModal from '../../shared/Modals/project-modal'

import PlaylinePic from '../../shared/images/Playline/playline-logo1.svg'
import PorfolioPic from '../../shared/images/CM-logo-white.svg'
import NightOwlPic from '../../shared/images/NightOwl/nightowl-logo.svg'
import CodePinPic from '../../shared/images/CodePin/codepin.jpg'
import SchedulerPic from '../../shared/images/Scheduler/scheduler-logo.svg'
import TweeterLogo from '../../shared/images/Tweeter/tweeter-logo.svg'

import CodePinRegister from '../../shared/images/CodePin/register-pic.png'
import CodePinWall from '../../shared/images/CodePin/codepin-resource-wall.png'
import CodePinLogin from '../../shared/images/CodePin/login.png'
import CodePinCreate from '../../shared/images/CodePin/create.png'
import CodePinDemo from '../../shared/images/CodePin/demo.gif'
import CodePinHome from '../../shared/images/CodePin/home.png'

import PlayLineLanding from '../../shared/images/Playline/playline-landing.png'
import PlayLineEntry from '../../shared/images/Playline/contest-entry.png'
import PlayLineCustom from '../../shared/images/Playline/custom.gif'
import PlayLineLobby from '../../shared/images/Playline/playline-lobby.svg'
import PlayLineLive from '../../shared/images/Playline/playline-live.png'

import SchedulerAdd from '../../shared/images/Scheduler/add-interview.png'
import SchedulerDelete from '../../shared/images/Scheduler/delete-interview.png'
import SchedulerGif from '../../shared/images/Scheduler/scheduler.gif'

import NightOwlMapview from '../../shared/images/NightOwl/nightowl-map.png'
import NightOwlUberview from '../../shared/images/NightOwl/map-uberview.png'
import NightOwlBarview from '../../shared/images/NightOwl/nightowl-barview.png'
import NightOwlCheckIn from '../../shared/images/NightOwl/checkin.png'
import NightOwlLogin from '../../shared/images/NightOwl/login.png'
import NightOwlDemo from '../../shared/images/NightOwl/nightowl-demo.gif'

import TweeterMsg from '../../shared/images/Tweeter/tweet-msg.png'
import TweeterMain from '../../shared/images/Tweeter/main.png'
import TweeterDemo from '../../shared/images/Tweeter/demo.gif'


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
          original: PlayLineLobby,
          thumbnail: PlayLineLobby
        },
        {
          original: PlayLineCustom,
          thumbnail: PlayLineCustom
        },
        {
          original: PlayLineLive,
          thumbnail: PlayLineLive
        },
        {
          original: PlayLineEntry,
          thumbnail: PlayLineEntry
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
          original: CodePinRegister,
          thumbnail: CodePinRegister
        },
        {
          original: CodePinDemo,
          thumbnail: CodePinDemo
        },
        {
          original: CodePinCreate,
          thumbnail: CodePinCreate
        },
        {
          original: CodePinWall,
          thumbnail: CodePinWall
        },
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
          original: PlayLineLobby,
          thumbnail: PlayLineLobby
        },
        {
          original: PlayLineCustom,
          thumbnail: PlayLineCustom
        },
        {
          original: PlayLineLive,
          thumbnail: PlayLineLive
        },
        {
          original: PlayLineEntry,
          thumbnail: PlayLineEntry
        }
      ]
    },
    {
      id: 4,
      name: 'Interview Scheduler',
      subtext: 'Mock Interview Scheduler',
      description: `Interview Scheduler is a SPA that allows users to book mock interviews with interviewers available for the day. Built using a TDD apporach, the testing libraries used
      were Jest/Cypress. Utilizes axios to create asynchronous HTTP requests to the back end server creating a fluent, instantaneous user experience.`,
      stack: 'ReactJS, ExpressJS & PostgreSQL',
      url: 'https://github.com/cmcewan93/InterviewScheduler',
      logo: SchedulerPic,
      images: [
        {
          original: SchedulerAdd,
          thumbnail: SchedulerAdd
        },
        {
          original: SchedulerDelete,
          thumbnail: SchedulerDelete
        },
        {
          original: SchedulerGif,
          thumbnail: SchedulerGif
        }
      ]
    },
    {
      id: 5,
      name: 'Night Owl',
      subtext: 'Nightlife Application',
      description: `Provides real time, live updates on the current status of bars and nightclubs within a user's area. Performs data analytics from a pool of users to provide 
      accurate live descriptions of different venues. User Registration and authenication using bcrypt to ensure user security. 
      Google Maps API and Uber API are integrated to provide directions/transport to a selected location. `,
      stack: 'ReactJS, ExpressJS & PostgreSQL',
      url: 'https://github.com/cmcewan93/NightOwl-FrontEnd',
      logo: NightOwlPic,
      images: [
        {
          original: NightOwlLogin,
          thumbnail: NightOwlLogin
        },
        {
          original: NightOwlDemo,
          thumbnil: NightOwlDemo
        },
        {
          original: NightOwlMapview,
          thumbnail: NightOwlMapview
        },
        {
          original: NightOwlBarview,
          thumbnail: NightOwlBarview
        },
        {
          original: NightOwlCheckIn,
          thumbnail: NightOwlCheckIn
        },
        {
          original: NightOwlUberview,
          thumbnail: NightOwlUberview
        },
      ]
    },
    {
      id: 6,
      name: 'Tweeter',
      subtext: 'Single-page Twitter clone',
      description: '',
      stack: 'JQuery & Javascript',
      url: 'https://github.com/cmcewan93/tweeter',
      logo: TweeterLogo,
      images: [
        {
          original: TweeterMain,
          thumbnail: TweeterMain
        },
        {
          original: TweeterDemo,
          thumbnail: TweeterDemo
        }
      ]
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
    <section className='section-container bg-light-slate-grey'>
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