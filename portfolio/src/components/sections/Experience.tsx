import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItem {
  title: string;
  company: string;
  location: string;
  startDate: { month: string; year: number };
  endDate: { month: string; year: number } | 'Present';
  role: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: TimelineItem[] = [
    {
      title: 'Software Development Engineer',
      company: 'Gone.com',
      location: 'Seattle',
      startDate: { month: 'Sept', year: 2024 },
      endDate: 'Present',
      role: 'Founding team',
      description: [
        '#1 First Founding engineer. Wearing multiple hats including Machine Learning, Front End, backend, customer experience, Devops, Product Management',
        'Developed an end-to-end AI product search system using Google Vertex AI and RAG with vector search to generate embeddings of 4000+ in-store items, displaying visually similar products, and enabling direct printing label to Zebra printers.',
        'Connected Pub/Sub for asynchronous processing of product data from shopify webhooks to update the search index. Implemented React.js application for visual and text-based similarity matching to display visually similar products in the search results.',
        'Engineered an AI-powered title, and description enhancement tool using Gemini API and Vision API, implementing an asynchronous Firebase Cloud Function and cloud tasks to automatically update Shopify with enriched product details using GraphQL; analyzed outputs and evaluated performance differences between OpenAI API and Gemini API',
        'Fine-tuned llama 3.1 model for pricing prediction of second-hand items using company-specific transaction data, implementing parameter-efficient fine-tuning (PEFT) techniques including LoRA (Low-Rank Adaptation) to process heterogeneous product data including descriptions, condition metadata, historical pricing trends',
        'Led full-stack development of a customer-facing React.js application, integrating Calendly API for dynamic scheduling and Google Maps API for real-time location tracking of pickups, hosted on firebase hosting services. Connected messaging services (Twilio, SendGrid, Slack) to send notifications to customers and drivers',
        'Developed an admin dashboard in React.js with real-time request management via REST APIs, enabling pickup approvals/rejections, driver assignments, and optimized routing. Integrated HelloTracks routing system and Twilio to customers about upcoming pickup status',
        'Architected and developed a scalable backend using Node.js and Express.js, implementing Firebase Authentication for secure user access, deploying on Google Cloud Run, and integrating the Shopify API for e-commerce functionality'
      ]
    },
    {
      title: 'Machine Learning Engineer',
      company: 'BOSCH USA',
      location: 'Pittsburgh',
      startDate: { month: 'Sept', year: 2023 },
      endDate: { month: 'Dec', year: 2023 },
      role: 'Intern',
      description: [
        'Collaborated with the team to fine-tune & develop IMU sensor encoder architecture for OpenAI\'s CLIP model',
        'Designed & developed iOS & WatchOS application for Multi-modal sensor data collection, facilitating real-world health data acquisition across 3 modalities: IMU data from Apple Watch & AirPods, and camera & audio data from the iPhone',
        'Utilized CoreMotion, AV Foundation, and HealthKit APIs to maximize data integration & collected data of 30 volunteers'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Quadrant Technologies',
      location: 'Redmond',
      startDate: { month: 'June', year: 2023 },
      endDate: { month: 'Aug', year: 2023 },
      role: 'Intern',
      description: [
        'Led a team of 9 as a Scrum master, focusing on the deployment of a WebApp within the Microsoft Azure cloud platform',
        'Developed a React.js application and implemented a CI/CD pipeline using Azure Web App services\' PaaS offerings',
        'Managed a Microsoft MySQL database for the application & created Power BI dashboards to provide actionable insights'
      ]
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Amazon Lab126',
      location: 'UW, Seattle',
      startDate: { month: 'Dec', year: 2022 },
      endDate: { month: 'June', year: 2023 },
      role: 'Intern',
      description: [
        'Developed a novel Deep neural network architecture model with a focus on lightweight, compressed deployment for edge devices',
        'Preprocessed a bias-free human dataset and fine-tuned a pre-trained MobileNetV2 model for human classification',
        'Applied model compression techniques, including Pruning and Quantization-Aware Training (QAT), across both TensorFlow and PyTorch platforms, achieving a classification accuracy of 95.4%',
        'Deployed the model on the edge device, achieving real-time processing capabilities and memory utilization'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'Indian Institute of Technology IIT-Madras',
      location: 'India',
      startDate: { month: 'Sept', year: 2021 },
      endDate: { month: 'April', year: 2022 },
      role: 'Full time',
      description: [
        'Preprocessed the health data obtained from the medical institute and performed feature engineering. Developed a SVM classifier to predict Diabetes and Parkinson\'s disease, achieving an accuracy of 82.23% & 89.43%'
      ]
    },
    {
      title: 'Graduate Engineer Trainee',
      company: 'TATA Motors Ltd',
      location: 'Jamshedpur, India',
      startDate: { month: 'Jan', year: 2021 },
      endDate: { month: 'Sept', year: 2021 },
      role: 'Full time',
      description: [
        'Led a team of Subject Matter Experts & collaborated with Deputy General Managers to implement Industry 4.0 Revolution/Sensor software projects, achieving a 52% improvement in total efficiency within 3 months'
      ]
    }
  ];

  const formatDate = (date: { month: string; year: number } | 'Present') => {
    if (date === 'Present') return 'Present';
    return `${date.month} ${date.year}`;
  };

  return (
    <div className="experience-section timeline-section">
      <h2>Work Experience</h2>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-date">
                <Calendar className="calendar-icon" size={16} />
                <span className="date-text">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
              </div>
              <div className="timeline-card">
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-meta">
                  <span className="timeline-company">{exp.company}</span>
                  {exp.role && <span className="timeline-role"> • {exp.role}</span>}
                  <span className="timeline-location"> • {exp.location}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((desc: string, descIndex: number) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
