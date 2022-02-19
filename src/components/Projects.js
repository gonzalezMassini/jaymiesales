import React from 'react';
import ImageSlider from './ImageSlider';
import projects from '../assests/functions/projects';


const Projects = () => {
  return (
    <div className='container' id='projects'>
      <ImageSlider slides={projects}/>
    </div>
  );
};

export default Projects;
