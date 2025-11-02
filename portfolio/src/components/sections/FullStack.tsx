import React from 'react';
import { ProjectItem } from '../../types';

const FullStack: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title: 'Azure Web Application Deployment',
      description: 'Led team deployment of WebApp within Microsoft Azure cloud platform with CI/CD pipeline implementation.',
      technologies: ['React.js', 'Azure Web App', 'CI/CD', 'Microsoft Azure', 'Power BI']
    },
    {
      title: 'Multi-modal Data Collection iOS App',
      description: 'iOS & WatchOS application for multi-modal sensor data collection across IMU, camera, and audio modalities.',
      technologies: ['iOS', 'WatchOS', 'Swift', 'CoreMotion', 'AV Foundation', 'HealthKit']
    },
    {
      title: 'Industry 4.0 Sensor Software Projects',
      description: 'Led implementation of Industry 4.0 Revolution/Sensor software projects achieving 52% efficiency improvement.',
      technologies: ['Industry 4.0', 'Sensor Integration', 'Efficiency Optimization', 'Team Leadership']
    },
    {
      title: 'Real-time Notification System',
      description: 'Integrated Twilio, SendGrid, and Slack APIs to deliver instant notifications for pickup requests and customer messages.',
      technologies: ['Twilio', 'SendGrid', 'Slack API', 'Real-time Notifications', 'API Integration']
    },
    {
      title: 'Database Management & Analytics',
      description: 'Managed Microsoft MySQL database and created Power BI dashboards for actionable business insights.',
      technologies: ['MySQL', 'Power BI', 'Data Analytics', 'Database Management', 'Business Intelligence']
    },
    {
      title: 'Customer-Facing React Application',
      description: 'Full-stack React.js application with Calendly API integration for dynamic scheduling and Google Maps API for real-time location tracking.',
      technologies: ['React.js', 'Calendly API', 'Google Maps API', 'Firebase Hosting', 'Tailwind CSS']
    },
    {
      title: 'Admin Dashboard with Real-time Management',
      description: 'React.js admin dashboard with real-time request management, pickup approvals, driver assignments, and optimized routing.',
      technologies: ['React.js', 'REST APIs', 'Twilio', 'SendGrid', 'Slack API', 'Real-time Updates']
    },
    {
      title: 'Scalable Backend Architecture',
      description: 'Node.js and Express.js backend with Firebase Authentication, Google Cloud Run deployment, and Shopify API integration.',
      technologies: ['Node.js', 'Express.js', 'Firebase Auth', 'Google Cloud Run', 'Shopify API', 'REST APIs']
    }
  ];

  return (
    <div className="projects-section">
      <h2>Full Stack Development</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullStack;
