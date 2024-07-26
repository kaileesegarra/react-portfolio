// src/components/Project.js
import React from 'react';

const Project = ({ title, img, deployLink, repoLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        {' | '}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
};

export default Project;
