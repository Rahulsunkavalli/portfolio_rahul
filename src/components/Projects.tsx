  import React, { useState } from 'react';
  import { Github, ExternalLink, X } from 'lucide-react';

  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubLink: string;
    demoLink?: string;
  }

  const Projects: React.FC = () => {
    const projects: Project[] = [
      {
        id: 1,
        title: "Dr. BOT",
        description: "AI-powered multilingual healthcare chatbot designed to provide medical information and preliminary diagnoses based on symptoms. Utilizes natural language processing to understand user queries in multiple languages.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tags: ["Python", "NLP", "AI", "Healthcare"],
        githubLink: "https://github.com/",
        demoLink: "https://drive.google.com/file/d/1IHGu0rF0xW5roxbMaTUkbJlB_LREK6R3/view?usp=sharing",
        
      },
      {
        id: 2,
        title: "Anime Recommendation System",
        description: "A personalized recommendation system built with Python, React, and FastAPI that suggests anime titles based on user preferences and viewing history. Implements collaborative filtering and content-based filtering algorithms.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        tags: ["Python", "React", "FastAPI", "Machine Learning"],
        githubLink: "https://github.com/Rahulsunkavalli/Anime_Recommendation-"
      },
      {
        id: 3,
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for visualizing complex datasets using Python and Power BI. Features customizable charts, filters, and data export options for comprehensive data analysis.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tags: ["Python", "Power BI", "Data Analysis", "Visualization"],
        githubLink: "https://github.com/"
      },
      {
      id: 4,
      title: "PDF Chatbot",
      description: "A chatbot that analyzes PDFs using BERT transformers for text analysis, question answering, and summary generation. Integrated FastAPI for backend and React for frontend.",
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "LLM", "FastAPI", "React"],
      githubLink: "https://github.com/Rahulsunkavalli/PDF-Chatbot",
    },
    {
      id: 5,
      title: "Task Management Application",
      description: "A task management system with RESTful APIs using Spring Boot, Hibernate, and React. Implements efficient database storage and dynamic frontend interaction.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80",
      tags: ["Java", "Spring Boot", "Hibernate", "React"],
      githubLink: "https://github.com/Rahulsunkavalli/Task_management",
      },
    {
      id: 6,
      title: "Bike Rental System",
      description: "A bike rental system that allows users to rent bikes efficiently with an intuitive interface and backend management. Built using Java, Spring Boot, and React for seamless user interaction.",
      image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=1470&q=80",
      tags: ["Java", "Spring Boot", "React", "Backend"],
      githubLink: "https://github.com/Rahul-sunkavalli/bike-rental-system/tree/main",
    }
    ];

    const [activeProject, setActiveProject] = useState<Project | null>(null);

    const openProjectModal = (project: Project) => {
      setActiveProject(project);
    };

    const closeProjectModal = () => {
      setActiveProject(null);
    };

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skil ls in Python development, data science, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-blue-900 bg-opacity-50 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
  <button
    onClick={() => {
      
        openProjectModal(project);
      
    }}
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    View Details
  </button>

                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-gray-900 bg-opacity-70 rounded-full p-2 text-white hover:bg-opacity-100 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">{activeProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-blue-900 bg-opacity-50 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">
                  {activeProject.description}
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href={activeProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  
                  {activeProject.demoLink && (
                    <a 
                      href={activeProject.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Projects;