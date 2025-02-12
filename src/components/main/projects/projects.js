import React, {useState, useEffect} from 'react';
import ProjectModal from '../../shared/modals/project-modal';
import Aos from "aos";
import projects from './project-data';
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
    
  const renderGrid = (projects) => {
    // This fn splits the array into sub arrays of a specified length, creates the columns for the grid
    function split(array, n) {
      let [...arr]  = array;
      const res = [];
      while (arr.length) {
        res.push(arr.splice(0, n));
      }
      return res;
    }
    let splitArray = split(projects, 3)
   
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
      className={`grid-item ${columnColorClassArray[columnNum]} ${hoverId === item.id ? 'hovered' : ''} animate__animated animate__fadeInUp`} 
      onMouseEnter={() => setHoverId(item.id)} 
      onMouseLeave={() => setHoverId(null)}
      >
        {
          hoverId === item.id ?
          <div className='inner-grid-item'>
            <div className='upper-grid-item animate__animated animate__fadeInDown'>
              <div className='project-title'>{item.name}</div>
              <div className='tech-stack'>{item.stack}</div>
            </div>
            <div className='project-button animate__animated animate__fadeInUp' onClick={() => selectProject(item)}>LEARN MORE</div>
          </div>
          :
          <img className='grid-image' src={item.logo} alt='Project logo'/>
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