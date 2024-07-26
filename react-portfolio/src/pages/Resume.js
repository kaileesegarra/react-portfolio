// src/pages/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <a href="your-resume-url.pdf" download>COME BACK SOON</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        {/* Add more proficiencies */}
      </ul>
    </div>
  );
};

export default Resume;
