import React from 'react';
import { GraduationCap, BookOpen, Users, Trophy, Briefcase, FileText } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  focus?: string;
  coursework?: string[];
  activities?: string[];
  topics?: string[];
  internships?: string[];
  research?: string[];
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: 'Master of Science - MS, Electrical and Computer Engineering',
      institution: 'University of Washington',
      location: 'Seattle',
      year: 'June 2024',
      focus: 'Machine learning from the ECE Department and Tech-business from the Foster school of business',
      coursework: [
        'EE 511: Advanced Machine Learning',
        'CSE 599: Advanced Deep Learning',
        'EE 596: Deep learning capstone: Amazon Lab126',
        'CSE 548: Advanced Computer Architecture',
        'EE 501: Academic Writing',
        'EE 500 C: Electrical seminar',
        'CHEM 599: Data science seminar',
        'EE 601: Summer and Fall internship'
      ],
      topics: [
        'Sustainable development case studies',
        'Entrepreneurial System and Design',
        'Business Plan',
        'Business Finance'
      ]
    },
    {
      degree: 'BTech, Electrical and Electronics Engineering',
      institution: 'National Institute of Technology Karnataka',
      location: 'Surathkal, India',
      year: 'June 2020',
      activities: [
        'Anchor for Republic day, Independence Day, foundation day events (2019); Cricket, Badminton',
        'Volleyball Inter-NIT tournament',
        'Executive member, Institute of Engineers'
      ],
      research: [
        'Presented two papers at the International Engineering Symposium, Kumamoto University, Japan',
        'Interned at University Technology Malaysia, selected as an international researcher'
      ],
      internships: [
        'Bosch Electric',
        'Schneider Electric, Bangalore'
      ]
    }
  ];

  const certifications = [
    'Microsoft Azure Certified Data Scientist',
    'Microsoft Azure Certified AI Engineer',
    'IBM Data Science Professional Certificate'
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <div className="education-meta">
                <span className="institution">{edu.institution}</span>
                <span className="location">{edu.location}</span>
                <span className="year">{edu.year}</span>
              </div>
              {edu.focus && (
                <p className="education-focus">{edu.focus}</p>
              )}
            </div>
            
            {edu.coursework && (
              <div className="education-details">
                <div className="detail-header">
                  <BookOpen className="detail-icon" size={18} />
                  <h4>Coursework</h4>
                </div>
                <ul className="coursework-list">
                  {edu.coursework.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {edu.topics && (
              <div className="education-details">
                <div className="detail-header">
                  <BookOpen className="detail-icon" size={18} />
                  <h4>Additional Topics</h4>
                </div>
                <ul className="topics-list">
                  {edu.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {edu.research && (
              <div className="education-details">
                <div className="detail-header">
                  <FileText className="detail-icon" size={18} />
                  <h4>Research & Academic Achievements</h4>
                </div>
                <ul className="research-list">
                  {edu.research.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {edu.internships && (
              <div className="education-details">
                <div className="detail-header">
                  <Briefcase className="detail-icon" size={18} />
                  <h4>Internships</h4>
                </div>
                <ul className="internships-list">
                  {edu.internships.map((internship, idx) => (
                    <li key={idx}>{internship}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {edu.activities && (
              <div className="education-details">
                <div className="detail-header">
                  <Users className="detail-icon" size={18} />
                  <h4>Activities and Societies</h4>
                </div>
                <ul className="activities-list">
                  {edu.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="certifications">
        <div className="cert-header">
          <Trophy className="cert-icon" size={20} />
          <h3>Certifications</h3>
        </div>
        <div className="cert-list">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
