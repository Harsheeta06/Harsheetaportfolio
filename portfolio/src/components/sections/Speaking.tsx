import React from 'react';
import { Mic, MapPin, Calendar, Play, ExternalLink, Users, Award, Sparkles, Briefcase, GraduationCap, Rocket } from 'lucide-react';

const Speaking: React.FC = () => {
  const speakingEvents = [
    {
      title: 'Speaker at TheCube Silicon Angel',
      location: 'Stanford University',
      description: 'Presented on AI/ML innovations and their impact on modern technology solutions.',
      videoLink: 'https://youtu.be/SKp2ebcKbcM?si=vq61CKcmO4S5zGCt',
      icon: Mic,
      gradient: 'from-purple-500 to-pink-500',
      year: '2024'
    },
    {
      title: 'HPAIR Harvard Conference 2024',
      location: 'Harvard University',
      description: 'Delegate representing University of Washington, Seattle in international academic conference.',
      icon: Award,
      gradient: 'from-blue-500 to-cyan-500',
      year: '2024'
    },
    {
      title: 'Chair for Poster Session',
      location: 'Women in Data Science Worldwide Conference, Stanford University',
      description: ['Led poster session at Women in Data Science conference that drew over 4000+ people from all over the world globally, facilitating academic discussions.', 'Collaborated with executive leaders and board committees from the women in data science worldwide organisation.'],
      videoLink: 'https://www.youtube.com/watch?v=pp6rv16cGBE',
      timestamp: '6:56:08',
      icon: Users,
      gradient: 'from-emerald-500 to-teal-500',
      year: '2025'
    },
    {
      title: 'Overall Chair',
      location: 'Women in Data Science Puget Sound Chapter, Seattle',
      description: ['Led over 4 committees including marketing, sponsorship, content, and experience, managing 40+ volunteers across all committees.', 'The conference brought in over 400+ attendees, featuring speakers from top companies discussing cutting edge technologies and securing sponsorships from Expedia, Pfizer, Foster School, and more.'],
      videoLink: 'https://www.youtube.com/watch?v=b13hMhcOyQU',
      timestamp: '22:15 mins',
      icon: Sparkles,
      gradient: 'from-orange-500 to-red-500',
      year: '2025'
    },
    {
      title: 'Breaking into Tech: Job Search Strategies',
      location: 'Vahati Inc.',
      description: 'Spoke about breaking into tech, job search strategies, and finding belonging as a first-gen immigrant.',
      icon: Briefcase,
      gradient: 'from-indigo-500 to-purple-500',
      year: '2025'
    },
    {
      title: 'Graduate studies for data careers panel',
      location: 'University of Washington Bank of America Center',
      description: 'Presented at Women in Data Science event at University of Washington Bank of America Center.',
      icon: GraduationCap,
      gradient: 'from-rose-500 to-pink-500',
      year: '2025'
    },
    {
      title: 'Nucleate Accelerator 2024',
      location: 'Pacific Northwest Region',
      description: [
        'One of the three startup teams in the Pacific Northwest region selected for the Nucleate Accelerator program.',
        'Co-Founder and CEO: Pitched an AI-enabled mental health care product at the demo day!',
        'Met bi-weekly with experts and founders from the Seattle area and mentors from Comotion who helped fine-tune the business model and technology.',
        'Awarded Genentech DEI prize. Secured grant to attend the Summit\'24.'
      ],
      icon: Rocket,
      gradient: 'from-violet-500 to-fuchsia-500',
      year: '2024'
    }
  ];

  return (
    <div className="speaking-section">
      <div className="speaking-header">
        <div className="header-content">
          <div className="title-wrapper">
            <Mic className="title-icon" />
            <h2>Speaking Experience</h2>
          </div>
          
        </div>
      </div>
      
      <div className="speaking-grid">
        {speakingEvents.map((event, index) => {
          const IconComponent = event.icon;
          return (
            <div key={index} className={`speaking-card ${event.gradient}`}>
              <div className="card-content">
                <div className="card-header">
                  <div className="icon-wrapper">
                    <IconComponent className="event-icon" />
                  </div>
                  <div className="year-badge">
                    <Calendar className="year-icon" />
                    <span>{event.year}</span>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="event-title">{event.title}</h3>
                  
                  <div className="location-info">
                    <MapPin className="location-icon" />
                    <span className="location-text">{event.location}</span>
                  </div>
                  
                  {Array.isArray(event.description) ? (
                    <div className="event-description-paragraphs">
                      {event.description.map((item, idx) => (
                        <p key={idx} className="event-description">{item}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="event-description">{event.description}</p>
                  )}
                  
                  {event.videoLink && (
                    <div className="video-section">
                      <a 
                        href={event.videoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="video-link"
                      >
                        <Play className="play-icon" />
                        <span>Watch</span>
                        {event.timestamp && (
                          <span className="timestamp">({event.timestamp})</span>
                        )}
                        <ExternalLink className="external-icon" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="card-glow"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speaking;
