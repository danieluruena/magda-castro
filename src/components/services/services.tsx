import React from 'react';
import './services.css';

export const Services: React.FC = () => {
  const projects = [
    { title: 'Project One', description: 'Creative design solution' },
    { title: 'Project Two', description: 'Innovative approach' },
    { title: 'Project Three', description: 'Strategic implementation' }
  ];

  return (
    <section id="work" className="work">
      <div className="work-container">
        <h3 className="work-title">Work</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};