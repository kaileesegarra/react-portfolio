// src/pages/Portfolio.js
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <Project title="Project 1" img="project1-img-url" deployLink="project1-deploy-url" repoLink="project1-repo-url" />
      {/* Add more Project components for other projects */}
    </div>
  );
};

export default Portfolio;
