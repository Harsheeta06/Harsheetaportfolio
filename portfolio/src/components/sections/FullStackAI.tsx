import React from 'react';
import { ProjectItem } from '../../types';

const FullStackAI: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title: 'Multi-Agent AI Research Intelligence Platform',
      description: [
        'Developed an autonomous AI research intelligence system using OpenAI Agents SDK with hierarchical orchestration, implementing four specialized research agents (TrendScout, StartupHunter, NewsAggregator, DeepAnalyst) for automated discovery, analysis, and synthesis of AI industry insights.',
        'Integrated Model Context Protocol (MCP) servers including Brave Search API, Playwright browser automation, and filesystem tools for real-time web scraping and data collection.',
        'Built structured SQLite database architecture with four normalized tables (findings, startups, trends, news) implementing persistent storage with full-text search, filtering, and timestamped research attribution.'
      ],
      technologies: ['OpenAI Agents SDK', 'Model Context Protocol', 'Fetch MCP Server', 'Brave Search MCP Server', 'Playwright MCP Server', 'Filesystem MCP Server', 'SQLite']
    },
    {
      title: 'Autonomous LangGraph powered AI Agent with Multi-Tool Integration',
      description: [
        'Developed an autonomous AI agent system using LangGraph and LangChain with OpenAI GPT-4o-mini, implementing a state-based graph architecture with intelligent routing and tool selection to orchestrate complex multi-step workflows.',
        'The system integrates 10+ external APIs including Playwright for web automation, SendGrid and Twilio for communication, Todoist for task management, Python REPL for code execution, Serper API and Wikipedia for web search, and file management capabilities, with advanced loop prevention, timeout protection, and state persistence using LangGraph\'s MemorySaver checkpoint system.'
      ],
      technologies: ['LangGraph', 'LangChain', 'OpenAI GPT-4o-mini', 'Playwright Automation', 'SendGrid', 'Twilio', 'Todoist', 'Python REPL', 'Serper API', 'Wikipedia API', 'MemorySaver']
    },
    {
      title: 'Multi-Agent AI System for Automated Startup Discovery',
      description: [
        'Developed an autonomous AI agent system using CrewAI with hierarchical orchestration, implementing specialized agents for startup discovery, research analysis, and investment decision-making.',
        'Integrated SerperDev API for web search, Pushover for notifications, and memory architecture (SQLite long-term storage) for persistent context across sessions.',
        'Built with GPT-4o-mini and Pydantic models for structured outputs, automating end-to-end due diligence pipelines that scrape wikipedia and tech news to generate research reports with traction metrics, merit and funding analysis.'
      ],
      technologies: ['CrewAI', 'GPT-4o-mini', 'Pydantic', 'SerperDev API', 'Sendgrid', 'Pushover tool', 'SQLite']
    },
    {
      title: 'AI Product Search System',
      description: [
        'End-to-end AI product search system using Vertex AI RAG and vector search to generate embeddings of 4000+ in-store items with visual similarity matching.',
        'Ingested title, description, and embeddings into Vertex Vector Search Index.',
        'Integrated GCP Pub/Sub for asynchronous processing of product data from shopify webhooks to update the search index.',
        'Implemented React.js application for visual and text-based similarity matching to display visually similar products in the search results.'
      ],
      technologies: ['Vertex AI', 'Vector Search', 'RAG','Embeddings', 'React.js', 'Firebase', 'Google Cloud', 'GCP Pub/Sub']
    },
    {
      title: 'AI-Powered Product Enhancement Tool for shopify products',
      description: [
        'Automated Title, and description enhancement using Gemini API and Vision API.',
        'Directly updating the product details in Shopify using GraphQL using the firebase functions triggered by firestore updates.',
      ],
      technologies: ['Gemini API', 'Vision API', 'Firebase Cloud Functions', 'Shopify API', 'Cloud Tasks', 'GraphQL']
    }
  ];

  return (
    <div className="projects-section">
      <h2>Full Stack AI Applications</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            {Array.isArray(project.description) ? (
              project.description.map((para, paraIndex) => {
                const descriptionArray = project.description as string[];
                return (
                  <p key={paraIndex} style={{ marginBottom: paraIndex < descriptionArray.length - 1 ? '1em' : '0' }}>
                    {para}
                  </p>
                );
              })
            ) : (
              <p>{project.description}</p>
            )}
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

export default FullStackAI;
