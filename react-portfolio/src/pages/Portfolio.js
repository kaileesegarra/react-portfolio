// src/pages/Portfolio.js
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <Project title="Password Generator",
        img="./assets/images/passwordgenerator.jpg"
        deployLink="project1-deploy-url" 
        repoLink="https://github.com/kaileesegarra/password-generator.git" />

      <Project title="SVG Logo Generator"
        img="project1-img-url" 
        deployLink="project1-deploy-url" 
        repoLink="https://github.com/kaileesegarra/svg-logo-generator.git" />

      <Project title="MERN Full-Stack Web Application" 
        img="project1-img-url" 
        deployLink="project1-deploy-url" 
        repoLink="https://github.com/DakotaPatterson/Planisphere.git" />
    </div>
  );
};

export default Portfolio;
