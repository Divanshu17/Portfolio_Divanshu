import React from 'react';
const  ProjectBox = ({projectPhoto, projectName}) => {
      
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            
        </div>
    </div>
  )
}

export default  ProjectBox