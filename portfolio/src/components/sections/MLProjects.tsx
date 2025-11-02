import React from 'react';
import { ProjectItem } from '../../types';

const MLProjects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title: 'Lightweight Deep Neural Network for Edge Devices',
      description: 'Fine-tuned pretrained MobileNetV2 and developed a novel compressed neural network architecture achieving 95.4% accuracy with real-time processing on edge devices.',
      technologies: ['PyTorch', 'Fine-tuning', 'TensorFlow', 'MobileNetV2', 'Pruning', 'Quantization', 'Edge Computing']
    },
    {
      title: 'LLaMA 3.1 Fine-tuning for Second-hand Item Pricing Prediction',
      description: 'Fine-tuned Meta\'s LLaMA 3.1 model for pricing prediction of second-hand items using company-specific transaction data, implementing parameter-efficient fine-tuning (PEFT) techniques including LoRA (Low-Rank Adaptation) to process heterogeneous product data including descriptions, condition metadata, historical pricing trends',
      technologies: ['PyTorch', 'Transformers', 'LLaMA 3.1', 'LoRA', 'PEFT', 'Hugging Face', 'NLP', 'Fine-tuning']
    },
    {
      title: 'IMU Sensor Encoder Architecture for CLIP Model',
      description: 'Fine-tuned and developed IMU sensor encoder architecture for OpenAI\'s CLIP model, enabling multi-modal sensor data processing.',
      technologies: ['PyTorch', 'TensorFlow', 'CoreMotion', 'HealthKit', 'iOS', 'WatchOS']
    },
    {
      title: 'Health Data Classification System',
      description: 'Developed SVM classifier to predict Diabetes and Parkinson\'s disease with 82.23% and 89.43% accuracy respectively.',
      technologies: ['Scikit-learn', 'SVM', 'Feature Engineering', 'Data Preprocessing']
    },
    {
      title: 'Real-time Object Detection for Autonomous Driving',
      description: 'Implemented real-time object detection using camera and radar inputs with Faster R-CNN and YOLO models.',
      technologies: ['OpenCV', 'YOLO', 'Faster R-CNN', 'Open3D', 'Point Cloud Processing']
    },
    {
      title: 'LLM Development from Scratch',
      description: 'Designed and built Image Captioning systems using Vanilla RNNs, Transformers and LSTMs from scratch.',
      technologies: ['PyTorch', 'Transformers', 'RNN', 'LSTM', 'Computer Vision', 'NLP']
    }
  ];

  return (
    <div className="projects-section">
      <h2>Machine Learning Projects</h2>
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

export default MLProjects;
