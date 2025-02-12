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

import CaseIqLogo from '../../shared/images/caseiq/caseiq.svg'
import CaseIqLogo2 from '../../shared/images/caseiq/caseiq.jpg'
import CaseIqMainPage from '../../shared/images/caseiq/caseiqmainpage.png'
import CaseIqDashboard from '../../shared/images/caseiq/caseiqdashboard.png'
import CaseIqGif from '../../shared/images/caseiq/caseiqgif.gif'

import ButtonIncLogo from '../../shared/images/button/buttonlogo.svg'
import ButtonIncLogo2 from '../../shared/images/button/resized_buttonlogo.svg'

import CareerCompassLogo from '../../shared/images/careercompass/career-compass-logo.jpg'

const projects = [
    {
        id: 1,
        name: 'Case IQ',
        subtext: 'Case Management Software',
        description: `Case IQ, formerly i-Sight, is a leading provider of investigative case management software that helps organizations efficiently manage and resolve workplace incidents.
        As a member of the Platform Team, I contributed to implementing several full-stack features, including a customizable data grid that enabled users to filter and sort data across multiple entities. 
        I also led the development of a feature that optimized the deployment process by 25%, eliminating the need for developer intervention when enabling the Portal and Hotline features, streamlining operations and enhancing efficiency.`,
        url: 'https://www.caseiq.com/',
        stack: 'BackboneJS, ExpressJS, PostgreSQL, ElasticSearch, Redis, RabbitMQ, AWS',
        logo: CaseIqLogo,
        images: [
          {
            original: CaseIqLogo2,
            thumbnail: CaseIqLogo2,
          },
          {
            original: CaseIqMainPage,
            thumbnail: CaseIqMainPage,
          },
          {
            original: CaseIqDashboard,
            thumbnail: CaseIqDashboard,
          },
          {
            original: CaseIqGif,
            thumbnail: CaseIqGif,
          },
        ]
    },
    {
        id: 2,
        name: 'Portfolio Site',
        subtext: 'Colin McEwan\'s personal portfolio site.',
        description: 
        `A portfolio site showcasing projects that I have created or collaborated on and providing insight into who I am. Powered by ReactJS, styled using SCSS and hosted on netlify.
        It is entirely responsive and Cross-browser compatible to ensure accessibility to a large variety of users.
        AOS animation library was used for the on-scroll effects, Email JS for email integration and react-image-gallery for the image slideshow.
        The majority of icons and images were created/edited using Adobe Illustrator and Photoshop.`,
        url: 'https://github.com/cmcewan93/portfolio-site',
        stack: 'ReactJS, SCSS',
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
        id: 3,
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
        id: 4,
        name: 'Button Inc',
        subtext: 'Digital solutions for sustainable government and climate action projects',
        description: `I consulted on the StrongerBC and Online Shop Form projects, helping BC business owners access COVID relief grants. My work included developing an automated email service to streamline user notifications about application status updates, enhancing communication efficiency. Additionally, 
        I designed and implemented front-end React components with robust field validation and smooth submission handling, ensuring a seamless user experience.`,
        stack: 'NextJS, NodeJS, ExpressJS & PostgreSQL',
        url: 'https://www.button.is/',
        logo: ButtonIncLogo,
        images: [
          {
            original: ButtonIncLogo2,
            thumbnail: ButtonIncLogo2,
          },
        ]
    },
    {
      id: 5,
      name: 'CareerCompass',
      subtext: 'Ai Powered Job Search Tool (WIP)',
      description: 'CareerCompass is an AI-powered job search tool designed to streamline your job search process. It helps job seekers track and manage their applications while highlighting key areas of overlap between a candidate\'s experience and job descriptions, ensuring a more tailored approach to each opportunity.',
      stack: 'ReactJS, TypeScript, MySQL, AWS & Docker',
      url: 'https://github.com/cmcewan93',
      logo: CareerCompassLogo,
      images: [
        {
          original: CareerCompassLogo,
          thumbnail: CareerCompassLogo
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
    },
    {
        id: 7,
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
      id: 8,
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
        id: 9,
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
  ]

export default projects;