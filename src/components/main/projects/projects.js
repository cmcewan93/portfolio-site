import React, {useState, useEffect} from 'react';
import ProjectModal from '../../shared/modals/project-modal';
import Aos from "aos";

import PlaylinePic from '../../shared/images/playline/playline-logo1.svg'
import PorfolioPic from '../../shared/images/cm-logo-white.svg'
import NightOwlPic from '../../shared/images/nightowl/nightowl-logo.svg'
import CodePinPic from '../../shared/images/codepin/codepin.jpg'
import SchedulerPic from '../../shared/images/scheduler/scheduler-logo.svg'
import TweeterLogo from '../../shared/images/tweeter/tweeter-logo.svg'

import CodePinRegister from '../../shared/images/codepin/register-pic.jpg'
import CodePinWall from '../../shared/images/codepin/codepin-resource-wall.png'
import CodePinLogin from '../../shared/images/codepin/login.png'
import CodePinCreate from '../../shared/images/codepin/create.jpg'
import CodePinDemo from '../../shared/images/codepin/demo.gif'

import PortfolioLanding from '../../shared/images/portfolio/landing.png'
import PortfolioGif from '../../shared/images/portfolio/portfolio-gif.gif'
import PortfolioSubmission from '../../shared/images/portfolio/message-submission.png'

import PlayLineLanding from '../../shared/images/playline/playline-landing.png'
import PlayLineEntry from '../../shared/images/playline/contest-entry.png'
import PlayLineCustom from '../../shared/images/playline/custom.gif'
import PlayLineLobby from '../../shared/images/playline/playline-lobby.svg'
import PlayLineLive from '../../shared/images/playline/playline-live.png'

import SchedulerAdd from '../../shared/images/scheduler/add-interview.png'
import SchedulerDelete from '../../shared/images/scheduler/delete-interview.png'
import SchedulerGif from '../../shared/images/scheduler/scheduler.gif'

import NightOwlMapview from '../../shared/images/nightowl/nightowl-map.png'
import NightOwlUberview from '../../shared/images/nightowl/map-uberview.png'
import NightOwlBarview from '../../shared/images/nightowl/nightowl-barview.png'
import NightOwlCheckIn from '../../shared/images/nightowl/checkin.png'
import NightOwlLogin from '../../shared/images/nightowl/login.png'
import NightOwlDemo from '../../shared/images/nightowl/nightowl-demo.gif'

import TweeterMain from '../../shared/images/tweeter/main.png'
import TweeterDemo from '../../shared/images/tweeter/demo.gif'


import './projects.scss'

const Projects = () => {

  const [visible, setVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})
  const [hoverId, setHoverId] = useState(null)

  const showModal = () => {setVisible(true)}
  const hideModal = () => {setVisible(false)}

  useEffect(() => {
    Aos.init({
      duration: 1500,
      disable: function() {
        var maxWidth = 995;
        return window.innerWidth < maxWidth;
      }
    })
  }, [])

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
      `A portfolio site showcasing projects that I have created or collaborated on and providing insight into who I am. Powered by ReactJS, styled using SCSS and hosted on netlify.
      It is entirely responsive and Cross-browser compatible to ensure accessibility to a large variety of users.
      AOS animation library was used for the on-scroll effects, Email JS for email integration and react-image-gallery for the image slideshow.
      The majority of icons and images were created/edited using Adobe Illustrator and Photoshop.`,
      url: 'https://github.com/cmcewan93/portfolio-site',
      stack: 'ReactJS',
      logo: PorfolioPic,
      images: [
        {
          original: PortfolioLanding,
          thumbnail: PortfolioLanding
        },
        {
          original: PortfolioSubmission,
          thumbnail: PortfolioSubmission
        },   
        {
          original: PortfolioGif,
          thumbnail: PortfolioGif
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
      name: 'PlayLine',
      subtext: 'Sports Lottery & Online Sports Casino',
      description: `Built out a registration flow designed to retain new users by educating them on how to create a new PlayLine contest. Implemented the design of multiple new features including 
      custom PlayLine contests, spin rewards wheel and contest entry/live contest sidebar. Completed a UI overhaul of the entire site including the lobby, live games and upcoming games all of
      which are fully responsive and supported across all browsers.`,
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
      description: `Twitter clone built as an exercise to practice HTML, CSS jQuery and AJAX front-end skills. Express and MongoDB are used on the backend to manage tweets that are submitted 
      and the various registered users. Asynchronous calls are made to the back end to update the Tweeter page in real time.`,
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
      <div className='grid-column-projects'  data-aos="zoom-in-up" data-aos-delay={`${columnNum * 200}`} >
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
      <div 
      className={`grid-item ${columnColorClassArray[columnNum]} ${hoverId == item.id ? 'hovered' : ''} animate__animated animate__fadeInUp`} 
      onMouseEnter={() => setHoverId(item.id)} 
      onMouseLeave={() => setHoverId(null)}
      >
        {
          hoverId == item.id ?
          <div className='inner-grid-item'>
            <div className='upper-grid-item animate__animated animate__fadeInDown'>
              <div className='project-title'>{item.name}</div>
              <div className='tech-stack'>{item.stack}</div>
            </div>
            <div className='project-button animate__animated animate__fadeInUp' onClick={() => selectProject(item)}>LEARN MORE</div>
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
        <h1 className='section-header'>Projects I've contributed to</h1>
        {
          renderGrid(projects)
        }
      </div>
      <ProjectModal visible={visible} hideModal={hideModal} project={selectedProject}/>
    </section>
  )
}

export default Projects