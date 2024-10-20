import React from 'react';
import ProjectBox from './ProjectBox';

import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/project4.png'
import project5 from '../images/project5.png'
import project6 from '../images/project6.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={project1} projectName="Virtual Office Platform: Redefining Remote Work Collaboration" />
        <ProjectBox projectPhoto={project2} projectName="Business Management Web" />
        <ProjectBox projectPhoto={project3} projectName="Company Expense Management" />
        <ProjectBox projectPhoto={project4} projectName="Nirvana-a one step solution to get relief from stress." />
        <ProjectBox projectPhoto={project5} projectName="Online Regular/Backlog Course Registration System" />
        <ProjectBox projectPhoto={project6} projectName="Data Analysis Report on SDG-15" />
      </div>

    </div>
  )
}

export default Projects